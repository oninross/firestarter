/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - Listeners
 */
var RR = (function (parent, $) {
    'use strict';

    var setup = function () {
        var $window = $(window),
            $body = $('body'),
            $header = $('.header'),
            isMobileDevice = $window.width() < 768 ? true : false,
            lastScrollTop = 0;

        $window.on('resize scroll', debounce(toggleHeader, 250));

        function toggleHeader() {
            var st = $(this).scrollTop(),
                $headerHeight = $header.height();

            isMobileDevice = $window.width() < 1024 ? 1 : 0;

            if (!isMobileDevice) {
                if (st > lastScrollTop) {
                    // scroll down
                    if (st > $headerHeight) {
                        $header.addClass('hide').removeClass('compact');
                    }
                } else {
                    // scroll up
                    if (st <= $headerHeight) {
                        $header.removeClass('compact hide');
                    } else {
                        $header.addClass('compact');
                    }
                }
            }

            lastScrollTop = st;
        };
    };

    // Export module method
    parent.listeners = {
        setup: setup
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.listeners.setup();
});
