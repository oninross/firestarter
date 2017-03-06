'use strict';

export default class TablePreview {
    constructor() {
        $.fn.isTableWide = function () {
            return $(this).parent().width() < $(this).width();
        };

        $('table').each(function (i, v) {
            let $this = $(v);

            if ($this.length && $this.isTableWide()) {
                $this
                    .after('<button class="btn-print-table js-print-table">View Table</button>')
                    .wrap('<div class="table-wrap"><div class="table-responsive"></div></div>');
            }
        });

        $('.table-wrap').each(function () {
            var $this = $(this),
                $tableResponsive = $this.find('.table-responsive'),
                $table = $this.find('table'),
                trTotalWidth = getTrWidth($this, $table);

            isLeftOrRight($this, $tableResponsive, trTotalWidth);

            $tableResponsive.on('scroll', function () {
                isLeftOrRight($this, $tableResponsive, trTotalWidth);
            })
        });

        function getTrWidth(el, table) {
            var width,
                totalWidth = 0,
                tableWrapWidth = el.width();

            return table.find('tr:first-child > *').each(function () {
                totalWidth += $(this).outerWidth()
            }), width = totalWidth - tableWrapWidth;
        };

        function isLeftOrRight(el, tableResponsive, trTotalWidth) {
            var tableResponsiveScrollLeft = tableResponsive.scrollLeft();

            tableResponsiveScrollLeft > 0 ? el.addClass('left') : el.removeClass('left'),
            tableResponsiveScrollLeft < trTotalWidth ? el.addClass('right') : el.removeClass('right')
        };



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
