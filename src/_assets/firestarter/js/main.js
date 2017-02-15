// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'lazyload';
import 'TweenMax';
import 'doT';
import './_modernizr';

import Navigation from '../../../_modules/navigation/navigation';

import { debounce, isMobile } from './_helper';

// Variable declaration
let $window = $(window),
    $body = $('body'),
    $header = $('.header'),
    isMobileDevice = isMobile(),
    lastScrollTop = 0;

$(() => {
    new Navigation();   // Activate Primary NAv modules logic

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



    ////////////////////////////////////
    //Background-size: cover Fallback //
    ////////////////////////////////////
    (function () {
        if ($('.no-bgsizecover').length) {
            $('.backstretch').each(function () {
                let $this = $(this),
                    $dataOriginal = $this.data('original');

                $this.backstretch($dataOriginal);
            });
        }
    })();



    ////////////////////////////
    // Magical Table wrapping //
    ////////////////////////////
    (function () {
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
    })();



    /////////////////////
    // Header Toggling //
    /////////////////////
    (function () {
        $window.on('resize scroll', debounce(toggleHeader, 250));

        function toggleHeader() {
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
        };
    })();


    console.log("I'm a firestarter!");
});


// Simple Service Worker to make App Install work (OPTIONAL)
// window.addEventListener('load', function () {
//     let outputElement = document.getElementById('output');

//     navigator.serviceWorker.register('/service-worker.js', { scope: './' })
//         .then(function (r) {
//             console.log('registered service worker');
//         })
//     .catch(function (whut) {
//         console.error('uh oh... ');
//         console.error(whut);
//     });

//     window.addEventListener('beforeinstallprompt', function (e) {
//         outputElement.textContent = 'beforeinstallprompt Event fired';
//     });
// });

// window.addEventListener('beforeinstallprompt', function (e) {
//     outputElement.textContent = 'beforeinstallprompt Event fired';

//     // e.userChoice will return a Promise. For more details read: http://www.html5rocks.com/en/tutorials/es6/promises/
//     e.userChoice.then(function (choiceResult) {
//         console.log(choiceResult.outcome);

//         if (choiceResult.outcome == 'dismissed') {
//             console.log('User cancelled homescreen install');
//         } else {
//             console.log('User added to homescreen');
//         }
//     });
// });
