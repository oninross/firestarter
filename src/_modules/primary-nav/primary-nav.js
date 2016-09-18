'use strict';

import { debounce } from '../../_scripts/_helper';

export default class PrimaryNav {
    constructor() {
        let el = $('#primary-nav'),
            primaryNavMarkup = '<button class="menu js-mobile-menu"><span class="line top"></span><span class="line mid"></span><span class="line bot"></span></button>',
            subNavMarkup = '<button class="sub-nav js-sub-nav icon-arrow"><span class="vh">Sub-navigation</span></button>',
            $dropdownList,
            $lvl1 = el.find('.lvl1'),
            $lvl2 = el.find('.lvl2'),
            $lvl3 = el.find('.lvl3'),
            $set = $lvl1.add($lvl2).add($lvl3),
            $window = $(window),
            isMobileDevice = $window.width() < 1024 ? true : false;

        el.prepend(primaryNavMarkup);

        // Insert Subnav Markup after Level 1 menu items
        $lvl1.find('ul').each(function () {
            $(this).before(subNavMarkup);
        });

        // TimelineMax the menu-icon animation for easier control on Touch/Mouse Events
        var tl = new TimelineMax();

        tl.to(el.find('.top'), 0.2, { top: 4, ease: Expo.easeInOut });
        tl.to(el.find('.bot'), 0.2, { top: -4, ease: Expo.easeInOut }, '-=0.2');

        tl.to(el.find('.mid'), 0.2, { opacity: 0, ease: Expo.easeInOut });
        tl.to(el.find('.top'), 0.2, { rotation: 45, ease: Expo.easeInOut }, '-=0.2');
        tl.to(el.find('.bot'), 0.2, { rotation: -45, ease: Expo.easeInOut }, '-=0.2');


        // Stop the Timeline at 0 else the animation will play after initiation
        tl.pause();

        // Declare Eventlisteners
        $dropdownList = el.find('ul li');

        var $primaryNav = $('.js-mobile-menu'),
            $subNav = $('.js-sub-nav');

        TweenMax.killTweensOf($dropdownList);

        checkNavHeight();

        $primaryNav.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var $this = $(this);

            $this.toggleClass('active');
            $lvl1.toggleClass('active');

            if ($this.hasClass('active')) {
                tl.play();

                $lvl1.slideDown({
                    duration: 500,
                    easing: 'easeOutExpo',
                    queue: false
                });
            } else {
                $set
                    .removeClass('active')
                    .find('.icon-arrow.active')
                        .removeClass('active');

                $lvl2
                    .slideUp({
                        duration: 500,
                        easing: 'easeOutExpo',
                        queue: false
                    });

                $lvl3
                    .slideUp({
                        duration: 500,
                        easing: 'easeOutExpo',
                        queue: false
                    });

                tl.reverse();
            }
        });

        $subNav.on('touchend, click', function () {
            var $this = $(this),
                $grandParent = $this.parent().parent(),
                $next = $this.next();

            if ($this.hasClass('active')) {
                if ($next.hasClass('lvl2')) {
                    $set
                        .find('.icon-arrow.active')
                            .removeClass('active');

                    $this.removeClass('active')
                        .next().find('.icon-arrow.active')
                        .removeClass('active');

                    $lvl3.slideUp({
                        duration: 500,
                        easing: 'easeOutExpo'
                    });

                    $next.removeClass('active').slideUp({
                        duration: 500,
                        easing: 'easeOutExpo',
                        queue: false
                    });
                } else {
                    $this.removeClass('active');

                    $next.removeClass('active').slideUp({
                        duration: 500,
                        easing: 'easeOutExpo',
                        queue: false
                    });
                }
            } else {
                if ($grandParent.hasClass('lvl1')) {
                    $lvl1
                        .find('.icon-arrow.active')
                            .removeClass('active')
                            .next().removeClass('active').slideUp({
                                duration: 500,
                                easing: 'easeOutExpo'
                            });
                } else if ($grandParent.hasClass('lvl2')) {
                    $lvl2
                        .find('.icon-arrow.active')
                            .removeClass('active')
                            .next().removeClass('active').slideUp({
                                duration: 500,
                                easing: 'easeOutExpo'
                            });
                }

                $this.addClass('active');

                setTimeout(function () {
                    $next.addClass('active');
                }, 200);

                $next.slideDown({
                    duration: 500,
                    easing: 'easeOutExpo',
                    queue: false
                });
            }
        });

        // Primary Nav Mouse Listeners
        el.on('click', '.no-link', function (e) {
            e.preventDefault();
            var $this = $(this),
                $next = $this.next();

            $next.trigger('click');

            RR.materialDesign.ripple(e, $this);
        }).on('click', '.lvl2 a', function (e) {
            var $this = $(this),
                $next = $this.next();

            if ($this.attr('src') === '#' && $this.parent().hasClass('no-link')) {
                $next.trigger('click');
            }

            RR.materialDesign.ripple(e, $this);
        }).on('mouseover', '.lvl1 a', function () {
            var $this = $(this),
                $next = $this.next();

            if (!isMobileDevice && !$next.hasClass('active')) {
                $next.trigger('click');
            }
        }).on('mouseout', '.lvl1 a', function () {
            var $this = $(this),
                $next = $this.next();

            if (!isMobileDevice && !$next.hasClass('active')) {
                $next.trigger('click');
            }
        });

        var $body = $('body');
        $body.on('click', function (e) {
            var $eTarget = $(e.target);

            if (!$eTarget.hasClass('nav') && !$eTarget.parents('.nav').length) {
                if ($primaryNav.hasClass('active')) {
                    $primaryNav.trigger('click');
                }

                $('.js-sub-nav.active').trigger('click');
            }
        });

        // Window Listener
        $window.on('resize', debounce(function () {
            isMobileDevice = $window.width() < 1024 ? true : false;

            if (isMobileDevice) {
                $primaryNav.removeClass('active');
                $set
                    .find('.icon-arrow.active')
                    .removeClass('active');

                tl.reverse();

                TweenMax.to($lvl1, 0.25, {
                    scale: 0,
                    ease: Expo.easeOut,
                    onComplete: function () {
                        $lvl2.hide();
                        $lvl3.hide();
                    }
                });
            } else {
                $lvl1.show();

                $('.js-sub-nav.active').trigger('click');
            }
        }, 250));

        $window.on('scroll', debounce(function () {
            isMobileDevice = $window.width() < 1024 ? true : false;

            if (!isMobileDevice) {
                $('.js-sub-nav.active').trigger('click');
            }
        }, 250));

        function checkNavHeight() {
            var $lvl1 = $('#primary-nav .lvl1'),
                $visibleArea = $window.outerHeight() - $('.header').outerHeight();

            $lvl1.css({
                height: $visibleArea
            });
        };
    }
}
