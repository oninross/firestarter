
'use strict';

import { toaster } from "../../_js/common/_material-design";

export default class ServiceWorker {
  constructor() {

    /*
     * https://developers.google.com/web/fundamentals/app-install-banners/
     * Look out for this link when Chrome 68 rolls out
     */

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

          // Show the prompt
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice
            .then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
              } else {
                console.log('User dismissed the A2HS prompt');
              }
              deferredPrompt = null;
            });
        }
      });

      window.addEventListener('beforeinstallprompt', function (e) {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
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
            toaster('A new version of this app is available.'); // duration 0 indications shows the toast indefinitely.
            window.location.reload();
          }
        };
      }
    }
  }
}
