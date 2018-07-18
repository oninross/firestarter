'use strict';

import scrollMonitor from 'scrollMonitor';

export default class MaterialDesign {
    constructor() {
        const self = this;

        self.inc = 0;
        self.toasterInd = 0;

        $('body').on('click', '.js-refresh', function () {
            window.location.reload();
        });
    }

    init() {
        const self = this;


        // Ripple Effect
        const $rippleEffect = $('button, .btn');
        $rippleEffect.on('click', function (e) {
            let $this = $(this);

            if (!$this.hasClass('disabled')) {
                self.ripple(e, $this);
            }
        });


        // Floating Label Input Box
        $('.form-item input[type="text"]').each(function () {
            let $this = $(this);

            $this
                .parent().addClass('-floating-input').end()
                .attr('placeholder', '')
                .on('focus', function () {
                    let $this = $(this);

                    $this.parent().addClass('focus');
                }).on('blur', function () {
                    let $this = $(this);

                    if ($this.val() === '') {
                        $this.parent().removeClass('focus');
                    }
                });

            if ($this.data('hint') !== undefined && $this.data('hint') !== '') {
                $this.after('<span class="hint"><strong>*Hint: </strong>' + $this.data('hint') + '</span>');
            }
        });


        // cards
        const card = document.getElementsByClassName('card');
        if (card.length > 0) {
            for (let i = 0, l = card.length; i < l; i++) {
                let el = card[i];
                let cardWatcher = scrollMonitor.create(el);

                cardWatcher.enterViewport(function () {
                    el.classList.add('-show', this.isInViewport);
                });

                cardWatcher.exitViewport(function () { });
            }

            scrollMonitor.recalculateLocations();
        }
    }

    toaster(msg = "Toaster message", ttl = 5, isReload = false) {
        const self = this;

        // Alert Toaster
        let popupAlert = doT.template($('#toaster-template').html()),
            obj = {
                ind: self.toasterInd,
                message: msg,
                isReload: isReload
            };

        if (!$('.toaster__wrap').length) {
            $('#main').after('<div class="toaster__wrap" />');
        }

        $('.toaster__wrap').append(popupAlert(obj));

        let toaster = '.toaster' + self.toasterInd;

        TweenLite.to(toaster, 0.75, {
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        });

        if (ttl !== 0) {
            TweenLite.to(toaster, 0.75, {
                opacity: 0,
                scale: 0.75,
                ease: Expo.easeOut,
                delay: ttl,
                onComplete: function () {
                    $(toaster).remove();
                }
            });
        }

        $(toaster).on('click', '.js-dismiss', function (e) {
            e.preventDefault();

            TweenLite.to($(this).parent(), 0.75, {
                opacity: 0,
                scale: 0.75,
                ease: Expo.easeOut,
                onComplete: function () {
                    $(toaster).remove();
                }
            });
        });

        self.toasterInd++;
    }

    ripple(e, el) {
        if ($('.no-svg').length || el.find('svg').length) {
            return false;
        }

        // create SVG element
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            g = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
            circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle'),
            x = e.offsetX,
            y = e.offsetY;

        if (x == undefined) {
            return false;
        }

        svg.setAttributeNS(null, 'class', 'ripple ripple' + self.inc);
        g.setAttributeNS(null, 'transform', 'translate(' + x + ', ' + y + ')');
        circle.setAttributeNS(null, 'r', (parseInt(el.outerWidth()) + x));

        svg.appendChild(g);
        g.appendChild(circle);
        el.append(svg);

        let $ripple = el.find('.ripple' + self.inc);
        TweenLite.from($ripple.find('circle'), 1.5, {
            attr: { r: 0 },
            opacity: 0.75,
            ease: Expo.easeOut,
            onComplete: function () {
                $ripple.remove();
            }
        });

        self.inc++;
    }
}
