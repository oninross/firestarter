
'use strict';

import 'jquery.cookie';
import MaterialDesign from '../../_js/common/_material-design';

export default class ServiceWorker {
  constructor() {
    const self = this;
    const material = new MaterialDesign();

    if ('serviceWorker' in navigator) {
      self.deferredPrompt;

      let isA2hs = $.cookie('addToHomeScreeen') == undefined ? $.cookie('addToHomeScreeen', true, { path: '/' }) : JSON.parse($.cookie('addToHomeScreeen'));

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
                        material.toaster('Caching complete!');
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
        }
      });

      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 76 and later from showing the mini-infobar
        e.preventDefault();

        if (!isA2hs) {
          return false;
        }

        // Stash the event so it can be triggered later.
        self.deferredPrompt = e;

        material.a2hs();

        $('.-js-install-a2hs').on('click', function () {
          let $a2hs = $(this).parent();

          self.showInstallPromotion();

          TweenLite.to($a2hs, 0.75, {
            opacity: 0,
            scale: 0.75,
            ease: Expo.easeOut,
            onComplete: function () {
              $a2hs.remove();
            }
          });
        });

        $('.-js-dismiss-a2hs').on('click', function () {
          let $a2hs = $(this).parent();

          $.cookie('addToHomeScreeen', false, { expires: 7, path: '/' });

          TweenLite.to($a2hs, 0.75, {
            opacity: 0,
            scale: 0.75,
            ease: Expo.easeOut,
            onComplete: function () {
              $a2hs.remove();
            }
          });
        });
      });

      window.addEventListener('appinstalled', (evt) => {
        console.log('User added to homescreen');
      });

      // Check to see if the service worker controlling the page at initial load
      // has become redundant, since this implies there's a new service worker with fresh content.
      if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        console.log("navigator.serviceWorker.controller.onstatechange:: " + navigator.serviceWorker.controller.onstatechange)
        navigator.serviceWorker.controller.onstatechange = function (event) {
          if (event.target.state === 'redundant') {
            material.toaster('A new version of this app is available.', 0); // duration 0 indications shows the toast indefinitely.
            // window.location.reload();
          }
        };
      }
    }
  }

  showInstallPromotion() {
    const self = this;

    // Show the prompt
    self.deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    self.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }

        self.deferredPrompt = null;
      });
  }
}
