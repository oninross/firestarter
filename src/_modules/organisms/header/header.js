'use strict';

import { debounce, isMobile } from '../../../_js/_helper';

const $header = $('header');

let isMobileDevice = false,
    lastScrollTop = 0;

export default class Header {
    constructor() {
        const that = this;

        $(window).on('resize scroll', debounce(that.toggleHeader, 250));
    }

    toggleHeader() {
        let st = $(this).scrollTop(),
            $headerHeight = $header.height();

        isMobileDevice = isMobile();

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
    }
}
