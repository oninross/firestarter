'use strict';

import { ripple } from '../../_assets/firestarter/scripts/_material';
import { debounce } from '../../_assets/firestarter/scripts/_helper';

export default class PrimaryNav {
    constructor() {
        let el = $('#primary-nav'),
            primaryNavMarkup = '<button class="menu js-mobile-menu"><span class="line top"></span><span class="line mid"></span><span class="line bot"></span></button>',
            subNavMarkup = '<button class="sub-nav js-sub-nav icon-arrow"><span class="vh">Sub-navigation</span></button>',
            $dropdownList,
            $nav = el.find('.nav'),
            $lvl1 = el.find('.lvl1'),
            $lvl2 = el.find('.lvl2'),
            $lvl3 = el.find('.lvl3'),
            $set = $lvl1.add($lvl2).add($lvl3),
            $window = $(window),
            isMobileDevice = $window.width() < 1024 ? true : false;

        el.before(primaryNavMarkup);

        // Insert Subnav Markup after Level 1 menu items
        $lvl1.find('ul').each(function () {
            $(this).before(subNavMarkup);
        });

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

            el.toggleClass('active');
            $this.toggleClass('active');
            $nav.toggleClass('active');
            $lvl1.toggleClass('active');

            if ($this.hasClass('active')) {
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

            ripple(e, $this);
        }).on('click', '.lvl2 a', function (e) {
            var $this = $(this),
                $next = $this.next();

            if ($this.attr('src') === '#' && $this.parent().hasClass('no-link')) {
                $next.trigger('click');
            }

            ripple(e, $this);
        }).on('mouseenter', '.lvl1 li', function () {
            var $this = $(this),
                $next = $this.find('> .lvl2');

            if (!isMobileDevice) {
                $next.slideDown({
                        duration: 500,
                        easing: 'easeOutExpo',
                        queue: false
                    });
            }
        }).on('mouseleave', '.lvl1 li', function () {
            var $this = $(this),
                $next = $this.find('> .lvl2');

            if (!isMobileDevice) {
                $next.slideUp({
                        duration: 500,
                        easing: 'easeOutExpo',
                        queue: false
                    });
            }
        });

        var $body = $('body');
        $body.on('click', function (e) {
            var $eTarget = $(e.target);

            if ($eTarget.hasClass('nav active') && !$eTarget.parents('.nav').length) {
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
