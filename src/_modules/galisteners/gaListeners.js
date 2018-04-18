'use strict';

export default class Galisteners {
    constructor() { }

    init() {
        (function (i,s,o,g,r,a,m) {
            i.GoogleAnalyticsObject = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-XXXXXXXX-X', 'auto');
    }

    gaClickEvent(c, l) {
        // ga('send', 'event', 'category', 'action', 'label', 'value');
        // ex: ga('send', 'event', 'image', 'click', 'image click', 'filename.jpg');
        ga('send', 'event', c, 'click', l);
    }
}
