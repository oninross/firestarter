// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'lazyload';
import 'TweenMax';
import 'doT';
import './_modernizr';

import Header from '../../../_modules/organisms/header/header';

import Navigation from '../../../_modules/molecules/navigation/navigation';

import TablePreview from '../../../_modules/atoms/table-preview/table-preview';

import { debounce, isMobile } from './_helper';
import { toaster } from './_material';

// Variable declaration
let $window = $(window),
    $body = $('body'),
    $header = $('.header'),
    isMobileDevice = isMobile(),
    lastScrollTop = 0;

$(() => {
    new Header();       // Activate Header modules logic
    new Navigation();   // Activate Primary Nav modules logic
    new TablePreview();   // Activate Table Preview modules logic

    ////////////////////////////
    // Set framerate to 60fps //
    ////////////////////////////
    TweenMax.ticker.fps(60);



    ///////////////////////
    // Init Lazy Loading //
    ///////////////////////
    $('.lazy').lazyload({
        effect : 'fadeIn'
    });



    /////////////////////////////
    // Placeholder Alternative //
    /////////////////////////////
    (function () {
        let $inputText = $('input[type="text"]');

        if ($('.no-placeholder').length) {
            $inputText
                .each(function () {
                    let $this = $(this);
                    $this.addClass('blur').attr('value', $this.attr('placeholder'));
                })
                .on('focus', function () {
                    let $this = $(this);

                    if ($this.val() == $this.attr('placeholder')) {
                        $this.val('').removeClass('blur');
                    }
                })
                .on('blur', function () {
                    let $this = $(this);
                    if ($this.val() == '') {
                        $this.val($this.attr('placeholder')).addClass('blur');
                    }
                });
        }
    })();

    console.log("I'm a firestarter!");
});


// Simple Service Worker to make App Install work (OPTIONAL)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js', { scope: './' })
                .then(function (registration) {
                    console.log('registered service worker');

                    registration.onupdatefound = function () {
                        // The updatefound event implies that registration.installing is set; see
                        // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
                        const installingWorker = registration.installing;

                        installingWorker.onstatechange = function () {
                            switch (installingWorker.state) {
                                case 'installed':
                                    if (!navigator.serviceWorker.controller) {
                                        toaster('Caching complete!');
                                    }
                                    break;

                                case 'redundant':
                                    throw Error('The installing service worker became redundant.');
                            }
                        };
                    };
                })
            .catch(function (whut) {
                console.error('uh oh... ');
                console.error(whut);
            });

            window.addEventListener('beforeinstallprompt', function (e) {
                outputElement.textContent = 'beforeinstallprompt Event fired';
            });
        }
    });

    window.addEventListener('beforeinstallprompt', function (e) {
        // e.userChoice will return a Promise. For more details read: http://www.html5rocks.com/en/tutorials/es6/promises/
        e.userChoice.then(function (choiceResult) {
            console.log(choiceResult.outcome);

            if (choiceResult.outcome == 'dismissed') {
                console.log('User cancelled homescreen install');
            } else {
                console.log('User added to homescreen');
            }
        });
    });

    // Check to see if the service worker controlling the page at initial load
    // has become redundant, since this implies there's a new service worker with fresh content.
    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        console.log("navigator.serviceWorker.controller.onstatechange:: " + navigator.serviceWorker.controller.onstatechange)
        navigator.serviceWorker.controller.onstatechange = function (event) {
            if (event.target.state === 'redundant') {
                toaster('A new version of this app is available.'); // duration 0 indications shows the toast indefinitely.
                window.location.reload();
            }
        };
    }
}
