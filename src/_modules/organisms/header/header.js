'use strict';

import { debounce, isMobile } from '../../../_js/_helper';

export default class Header {
    constructor() {
        const that = this;

        that.isMobileDevice = false;

        $(window).on('resize scroll', debounce(that.toggleHeader, 250));
    }

    toggleHeader() {
        let that = this,
            $header = $('header'),
            st = $(this).scrollTop(),
            $headerHeight = $header.height(),
            lastScrollTop = 0;

        that.isMobileDevice = isMobile();

        if (!that.isMobileDevice) {
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
    }
}
