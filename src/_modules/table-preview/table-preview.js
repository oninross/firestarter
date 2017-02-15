'use strict';

export default class TablePreview {
    constructor() {
        $.fn.isTableWide = function () {
            return $(this).parent().width() < $(this).width();
        };

        $('table').each(function (i, v) {
            let $this = $(v);

            if ($this.length && !$this.parent().hasClass('table-wrapper') && $this.isTableWide()) {
                $this
                    .after('<button class="btn-print-table js-print-table">View Table</button>')
                    .wrap('<div class="table-wrapper"></div>');
            }
        });

        let $tablePreview = $('.table-preview');
        if ($tablePreview.length) {
            $('meta[name="viewport"]').attr('content', 'user-scalable=yes');
            $tablePreview.append(localStorage.tablePreview);

            $(window).bind('beforeunload', function () {
                localStorage.tablePreview = null;
            });
        }

        $('body').on('click', '.js-print-table', function () {
            let $table = $(this).prev();

            localStorage.tablePreview = $table[0].innerHTML;
            window.open('/table-preview/', '_blank').focus();
        });
    }
}
