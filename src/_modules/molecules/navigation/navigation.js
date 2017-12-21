'use strict';

import { ripple } from '../../../_js/_material';
import { debounce, isMobile, easeOutExpo } from '../../../_js/_helper';

export default class Navigation {
    constructor() {

        const that = this,
            $body = $('body'),
            el = $('#navigation'),
            $nav = el.find('.nav'),
            $lvl1 = el.find('.lvl1'),
            $lvl2 = el.find('.lvl2'),
            $lvl3 = el.find('.lvl3'),
            $set = $lvl1.add($lvl2).add($lvl3),
            $dropdownList = el.find('ul li'),
            $primaryNav = $('.js-mobile-menu'),
            $subNav = $('.js-sub-nav'),
            subNavMarkup = '<button class="sub-nav js-sub-nav icon-arrow" name="Sub-navigation"></button>';

        let isMobileDevice = isMobile();

        that.$window = $(window);
        that.$visibleArea = 0;

        // Insert Subnav Markup after Level 1 menu items
        $lvl1.find('ul').each(function () {
            $(this).before(subNavMarkup);
        });

        that.checkNavHeight();

        $primaryNav.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const $this = $(this);

            el.toggleClass('active');
            $this.toggleClass('active');
            $nav.toggleClass('active');
            $lvl1.toggleClass('active');

            if ($this.hasClass('active')) {
                $lvl1.slideDown(easeOutExpo);
            } else {
                $set
                    .removeClass('active')
                    .find('.icon-arrow.active')
                    .removeClass('active');

                $lvl2.slideUp(easeOutExpo);
                $lvl3.slideUp(easeOutExpo);
            }
        });

        $subNav.on('touchend, click', function () {
            const $this = $(this),
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

                    $lvl3.slideUp(easeOutExpo);

                    $next.removeClass('active').slideUp(easeOutExpo);
                } else {
                    $this.removeClass('active');
                    $next.removeClass('active').slideUp(easeOutExpo);
                }
            } else {
                if ($grandParent.hasClass('lvl1')) {
                    $lvl1
                        .find('.icon-arrow.active')
                        .removeClass('active')
                        .next().removeClass('active').slideUp(easeOutExpo);
                } else if ($grandParent.hasClass('lvl2')) {
                    $lvl2
                        .find('.icon-arrow.active')
                        .removeClass('active')
                        .next().removeClass('active').slideUp(easeOutExpo);
                }

                $this.addClass('active');

                setTimeout(function () {
                    $next.addClass('active');
                }, 200);

                $next.slideDown(easeOutExpo);
            }
        });

        // Primary Nav Mouse Listeners
        el.on('click', '.no-link', function (e) {
            e.preventDefault();

            const $this = $(this),
                $next = $this.next();

            $next.trigger('click');

            ripple(e, $this);
        }).on('click', '.lvl2 a', function (e) {
            const $this = $(this),
                $next = $this.next();

            if ($this.attr('src') === '#' && $this.parent().hasClass('no-link')) {
                $next.trigger('click');
            }

            ripple(e, $this);
        }).on('mouseenter', '.lvl1 li', function () {
            const $this = $(this),
                $next = $this.find('> .lvl2');

            if (!isMobileDevice) {
                $next.stop().slideDown(easeOutExpo);
            }
        }).on('mouseleave', '.lvl1 li', function () {
            const $this = $(this),
                $next = $this.find('> .lvl2');

            if (!isMobileDevice) {
                $next.stop().slideUp(easeOutExpo);
            }
        });

        $body.on('click', function (e) {
            const $eTarget = $(e.target);

            if ($eTarget.hasClass('nav active') && !$eTarget.parents('.nav').length) {
                if ($primaryNav.hasClass('active')) {
                    $primaryNav.trigger('click');
                }

                $('.js-sub-nav.active').trigger('click');
            }
        });

        // Window Listener
        that.$window.on('resize', debounce(function () {
            isMobileDevice = isMobile();

            if (isMobileDevice) {
                $primaryNav.removeClass('active');
                $set
                    .find('.icon-arrow.active')
                    .removeClass('active');

                $nav.removeClass('active');
                $lvl1.removeClass('active');
                $lvl2.hide();
                $lvl3.hide();
            } else {
                $lvl1.show();

                $('.js-sub-nav.active').trigger('click');
            }
        }, 250));

        that.$window.on('scroll', debounce(function () {
            isMobileDevice = isMobile();

            if (!isMobileDevice) {
                $('.js-sub-nav.active').trigger('click');
            }
        }, 250));
    }

    checkNavHeight() {
        const that = this,
            $navLvl1 = $('#navigation .lvl1');

        that.$visibleArea = that.$window.outerHeight() - $('.header').outerHeight();

        $navLvl1.css({
            height: that.$visibleArea
        });
    }
}
