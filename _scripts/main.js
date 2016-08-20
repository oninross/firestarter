/* global RR: true, TweenMax: true, jQuery: true, Modernizr: true, jRespond: true, Expo: true */
/* jshint unused: false */

/* requestAnimationFrame Shim */
(function () {
    'use strict';

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            },
                    timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }
}());


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
};

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0) {
            return b;
        }

        if (t == d) {
            return b + c;
        }

        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }

        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

(function ($, undefined) {
    'use strict';

    // document ready begin
    // Using the shorthand method to save characters
    $(function () {

        // Set framerate to 60fps
        TweenMax.ticker.fps(60);

        // Init Lazy Loading
        $('.lazy').lazyload({
            effect : 'fadeIn'
        });


        /* Placeholder Alternative */
        (function () {
            var $inputText = $('input[type="text"]');

            if ($('.no-placeholder').length) {
                $inputText
                    .each(function () {
                        var $this = $(this);
                        $this.addClass('blur').attr('value', $this.attr('placeholder'));
                    })
                    .on('focus', function () {
                        var $this = $(this);

                        if ($this.val() == $this.attr('placeholder')) {
                            $this.val('').removeClass('blur');
                        }
                    })
                    .on('blur', function () {
                        var $this = $(this);
                        if ($this.val() == '') {
                            $this.val($this.attr('placeholder')).addClass('blur');
                        }
                    });
            }
        })();

        /* Background-size: cover Fallback */
        (function () {
            if ($('.no-bgsizecover').length) {
                $('.backstretch').each(function () {
                    var $this = $(this),
                        $dataOriginal = $this.data('original');

                    $this.backstretch($dataOriginal);
                });
            }
        })();


        /* JRespond Breakpoints */
        var jRes = jRespond([
            {
                label: 'mobile',
                enter: 0,
                exit: 767
            },{
                label: 'tablet',
                enter: 768,
                exit: 1023
            },{
                label: 'desktop',
                enter: 1024,
                exit: 10000
            }
        ]);

        /* JRespond Functions(Desktop) */
        jRes.addFunc({
            breakpoint: ['desktop'],
            enter: function () {
                RR.tableScrollbar.wrap();
            },
            exit: function () {
                RR.tableScrollbar.unwrap();
            }
        });

        /* JRespond Functions(Tablet) */
        jRes.addFunc({
            breakpoint: ['tablet'],
            enter: function () {
                RR.tableScrollbar.wrap();
            },
            exit: function () {
                RR.tableScrollbar.unwrap();
            }
        });

        /* JRespond Functions(Mobile) */
        jRes.addFunc({
            breakpoint: ['mobile'],
            enter: function () {
                RR.tableScrollbar.wrap();
            },
            exit: function () {
                RR.tableScrollbar.unwrap();
            }
        });
    });
}(jQuery));
