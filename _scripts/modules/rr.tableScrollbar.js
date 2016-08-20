/**
 * Wrap all tables in a <div class='table-wrapper' />
 * Print table in PDF for mobile users (dependent on jspdf.custom.js)
 */
var RR = (function (parent, $) {
    'use strict';

    $.fn.isTableWide = function () {
        return $(this).parent().width() < this.width();
    };

    var setup = function () {
        $('body').on('click', '.js-print-table', function () {
            var $table = $(this).next();

            localStorage.tablePreview = $table[0].innerHTML;
            window.open('/table-preview/', '_blank').focus();
        });
    };

    var wrap = function () {
        $('table').each(function () {
            var $this = $(this);

            if ($this.length && !$this.parent().hasClass('table-wrapper') && $this.isTableWide()) {
                $this
                    .after('<button class="btn-print js-print-table">View Table</button>')
                    .wrap('<div class="table-wrapper"></div>');
            }
        });

        var $tablePreview = $('.table-preview');
        if ($tablePreview.length) {
            $('meta[name="viewport"]').attr('content', 'user-scalable=yes');
            $tablePreview.append(localStorage.tablePreview);

            $(window).bind('beforeunload', function () {
                localStorage.tablePreview = null;
            });
        }
    };

    var unwrap = function () {
        $('.table-wrapper').each(function () {
            var $this = $(this),
                $table = $this.find('table'),
                $btnPrint = $this.prev();

            $btnPrint.remove();
            $table.unwrap();
        });
    };

    parent.tableScrollbar = {
        wrap: wrap,
        unwrap: unwrap,
        setup: setup
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.tableScrollbar.setup();
});

