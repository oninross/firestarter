'use strict';

import { debounce } from '../../../_assets/firestarter/js/_helper';

export default class TablePreview {
    constructor() {
        const that = this,
            $window = $(window);

        $('table').each(function (i, v) {
            let $this = $(v);

            if (!$this.hasClass('no-wrap')) {
                $this
                    .before('<button class="btn-print-table js-print-table">View Table</button>')
                    .wrap('<div class="table-wrap"><div class="table-responsive"></div></div>');
            }
        });

        $('.table-wrap').each(function () {
            var $this = $(this),
                $tableResponsive = $this.find('.table-responsive'),
                $table = $this.find('table'),
                trTotalWidth = that.getTrWidth($this, $table);

            that.isLeftOrRight($this, $tableResponsive, trTotalWidth);

            $tableResponsive.on('scroll', function () {
                that.isLeftOrRight($this, $tableResponsive, trTotalWidth);
            })
        });

        $window.on('resize', debounce(function () {
            $('table').each(function (i, v) {
                let $this = $(v),
                    $tableWrap = $this.closest('.table-wrap');

                if (that.isTableWide(v)) {
                    $tableWrap.removeClass('-clean');
                } else {
                    $tableWrap.addClass('-clean');
                }
            });
        }, 250)).trigger('resize');



        // Click the button to open table in new tab
        $('body').on('click', '.js-print-table', function () {
            let $table = $(this).prev();

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
}
