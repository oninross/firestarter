'use strict';

import { debounce } from '../../_js/common/_util';

export default class TablePreview {
    constructor() {
        const that = this;
        const $window = $(window);

        $('table').each(function (i, v) {
            let $this = $(v);

            if (!$this.hasClass('no-wrap')) {
                $this
                    .before('<button class="btn-print-table js-print-table">View Table</button>')
                    .wrap('<div class="table-wrap"><div class="table-responsive"></div></div>');
            }
        });

        $('.table-wrap').each(function () {
            let $this = $(this);
            const $tableResponsive = $this.find('.table-responsive');
            const $table = $this.find('table');
            const trTotalWidth = that.getTrWidth($this, $table);

            that.isLeftOrRight($this, $tableResponsive, trTotalWidth);

            $tableResponsive.on('scroll', function () {
                that.isLeftOrRight($this, $tableResponsive, trTotalWidth);
            })
        });

        $window.on('resize', debounce(function () {
            $('table').each(function (i, v) {
                let $this = $(v);
                const $tableWrap = $this.closest('.table-wrap');

                if (that.isTableWide(v)) {
                    $tableWrap.removeClass('-clean');
                } else {
                    $tableWrap.addClass('-clean');
                }
            });
        }, 250)).trigger('resize');



        // Click the button to open table in new tab
        $('body').on('click', '.js-print-table', function () {
            let $table = $(this).next();

            localStorage.tablePreview = $table[0].innerHTML;
            window.open('/table-preview/', '_blank').focus();
        });

        // Display the table in new tab
        let $tablePreview = $('.table-preview');
        if ($tablePreview.length) {
            $('meta[name="viewport"]').attr('content', 'user-scalable=yes');
            $tablePreview.append(localStorage.tablePreview);

            $(window).bind('beforeunload', function () {
                localStorage.tablePreview = null;
            });
        }
    }

    isTableWide(el) {
        return $(el).parent().width() < $(el).width();
    }

    getTrWidth(el, table) {
        let width;
        let totalWidth = 0;
        let tableWrapWidth = el.width();

        return table.find('tr:first-child > *').each(function () {
            totalWidth += $(this).outerWidth()
        }), width = totalWidth - tableWrapWidth;
    }

    isLeftOrRight(el, tableResponsive, trTotalWidth) {
        let tableResponsiveScrollLeft = tableResponsive.scrollLeft();

        tableResponsiveScrollLeft > 0 ? el.addClass('left') : el.removeClass('left'),
            tableResponsiveScrollLeft < trTotalWidth ? el.addClass('right') : el.removeClass('right');
    }
}
