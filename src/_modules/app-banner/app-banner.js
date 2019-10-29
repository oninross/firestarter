import 'jquery.cookie';

'use strict';

export default class AppBanner {
    constructor() {
        let ua = window.navigator.userAgent,
            iOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream,
            safari = iOS && !ua.match(/CriOS/i),
            addToHomeScreeen = $.cookie('addToHomeScreeen') == undefined ? false : $.cookie('addToHomeScreeen');

        console.error(iOS);
        console.error(safari);
        console.error(addToHomeScreeen);

        if (iOS && safari && !addToHomeScreeen) {
            $('#app-banner').addClass('show');
            $('html').addClass('iOS');

            $('.js-dismiss').on('click', function () {
                $.cookie('addToHomeScreeen', true, { path: '/' });
                $('#app-banner').removeClass('show');
            });
        }
    }
}