// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'lazyload';
import 'TweenLite';
import 'EasePack';
import 'AttrPlugin';
import 'CSSPlugin';
import 'doT';
import './_modernizr';

// for testing a11y only.  Remove before integration
import './tota11y.min';


import { debounce, isMobile } from './_helper';
import { toaster } from './_material';

import Header from '../_modules/organisms/header/header';

import Navigation from '../_modules/molecules/navigation/navigation';

import Galisteners from '../_modules/atoms/galisteners/galisteners';
import TablePreview from '../_modules/atoms/table-preview/table-preview';


$(() => {
    // Variable declaration
    let $window = $(window),
        $body = $('body'),
        $header = $('.header'),
        isMobileDevice = isMobile(),
        lastScrollTop = 0;

    new Header();
    new Navigation();
    new TablePreview();

    // Init Google Analytics
    const ga = new Galisteners();
    ga.init();



    // Set framerate to 60fps
    TweenLite.ticker.fps(60);



    // Init Lazy Loading
    $('.lazy').lazyload({
        effect: 'fadeIn',
        placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NjMzRTM4NTIzQjExRTdBODMzRjZENTM5NDE5NzIxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NjMzRTM5NTIzQjExRTdBODMzRjZENTM5NDE5NzIxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk2MzNFMzY1MjNCMTFFN0E4MzNGNkQ1Mzk0MTk3MjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk2MzNFMzc1MjNCMTFFN0E4MzNGNkQ1Mzk0MTk3MjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6NXABpAAAAGElEQVR42mL8//8/AyWAcdSAUQOAACDAAP6UGu/L41zEAAAAAElFTkSuQmCC'
    });


    let a = new RegExp('/' + window.location.host + '/');
    $('a').click(function () {
        if (!a.test(this.href)) {
            window.open($(this).attr('href'));
            return false;
        }
    });

    console.log("I'm a firestarter!");
});


// Simple Service Worker to make App Install work (OPTIONAL)
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function () {
//         if ('serviceWorker' in navigator) {
//             navigator.serviceWorker.register('/service-worker.js', { scope: './' })
//                 .then(function (registration) {
//                     console.log('registered service worker');

//                     registration.onupdatefound = function () {
//                         // The updatefound event implies that registration.installing is set; see
//                         // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
//                         const installingWorker = registration.installing;

//                         installingWorker.onstatechange = function () {
//                             switch (installingWorker.state) {
//                                 case 'installed':
//                                     if (!navigator.serviceWorker.controller) {
//                                         toaster('Caching complete!');
//                                     }
//                                     break;

//                                 case 'redundant':
//                                     throw Error('The installing service worker became redundant.');
//                             }
//                         };
//                     };
//                 })
//             .catch(function (whut) {
//                 console.error('uh oh... ');
//                 console.error(whut);
//             });

//             window.addEventListener('beforeinstallprompt', function (e) {
//                 outputElement.textContent = 'beforeinstallprompt Event fired';
//             });
//         }
//     });

//     window.addEventListener('beforeinstallprompt', function (e) {
//         // e.userChoice will return a Promise. For more details read: http://www.html5rocks.com/en/tutorials/es6/promises/
//         e.userChoice.then(function (choiceResult) {
//             console.log(choiceResult.outcome);

//             if (choiceResult.outcome == 'dismissed') {
//                 console.log('User cancelled homescreen install');
//             } else {
//                 console.log('User added to homescreen');
//             }
//         });
//     });

//     // Check to see if the service worker controlling the page at initial load
//     // has become redundant, since this implies there's a new service worker with fresh content.
//     if (navigator.serviceWorker && navigator.serviceWorker.controller) {
//         console.log("navigator.serviceWorker.controller.onstatechange:: " + navigator.serviceWorker.controller.onstatechange)
//         navigator.serviceWorker.controller.onstatechange = function (event) {
//             if (event.target.state === 'redundant') {
//                 toaster('A new version of this app is available.'); // duration 0 indications shows the toast indefinitely.
//                 window.location.reload();
//             }
//         };
//     }
// }
