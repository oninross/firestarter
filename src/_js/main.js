// Main javascript entry point
// Should handle bootstrapping/starting application

"use strict";

import "core-js";
import "regenerator-runtime/runtime";
import $ from "jquery";

import { MaterialDesign } from "./common/_material-design";

$(() => {
  // Init Material Design
  var material = new MaterialDesign();
  material.init();

  // JavaScript hack for opening links into new windows if target="_blank" is not set
  let a = new RegExp("/" + window.location.host + "/");
  $("a").click(function() {
    if (!a.test(this.href)) {
      window.open($(this).attr("href"));
      return false;
    }
  });

  // Warning alert for leaving the page
  // window.onbeforeunload = function (e) {
  //     e = e || window.event;

  //     // For IE and Firefox prior to version 4
  //     if (e) {
  //         e.returnValue = 'Any string';
  //     }

  //     // For Safari
  //     return 'Any string';
  // };

  console.log("I'm a firestarter!!!");
});

// // Simple Service Worker to make App Install work (OPTIONAL)
// if ('serviceWorker' in navigator) {
//   let deferredPrompt;

//   window.addEventListener('load', function () {
//     if ('serviceWorker' in navigator) {
//       navigator.serviceWorker.register('/service-worker.js', { scope: './' })
//         .then(function (registration) {
//           console.log('registered service worker');

//           registration.onupdatefound = function () {
//             // The updatefound event implies that registration.installing is set; see
//             // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
//             const installingWorker = registration.installing;

//             installingWorker.onstatechange = function () {
//               switch (installingWorker.state) {
//                 case 'installed':
//                   if (!navigator.serviceWorker.controller) {
//                     material.toaster('Caching complete!');
//                   }
//                   break;

//                 case 'redundant':
//                   throw Error('The installing service worker became redundant.');
//               }
//             };
//           };
//         })
//         .catch(function (whut) {
//           console.error('uh oh... ');
//           console.error(whut);
//         });
//     }
//   });

//   window.addEventListener('beforeinstallprompt', (e) => {
//     // // Prevent Chrome 76 and later from showing the mini-infobar
//     // e.preventDefault();

//     // Stash the event so it can be triggered later.
//     deferredPrompt = e;

//     // // Show the prompt
//     // deferredPrompt.prompt();

//     // Wait for the user to respond to the prompt
//     deferredPrompt.userChoice.then((choiceResult) => {
//       console.log(choiceResult.outcome);

//       if (choiceResult.outcome === 'accepted') {
//         console.log('User accepted the A2HS prompt');
//       } else {
//         console.log('User dismissed the A2HS prompt');
//       }

//       // deferredPrompt = null;
//     });
//   });

//   window.addEventListener('appinstalled', (evt) => {
//     console.log('User added to homescreen');
//   });

//   // Check to see if the service worker controlling the page at initial load
//   // has become redundant, since this implies there's a new service worker with fresh content.
//   if (navigator.serviceWorker && navigator.serviceWorker.controller) {
//     console.log("navigator.serviceWorker.controller.onstatechange:: " + navigator.serviceWorker.controller.onstatechange)
//     navigator.serviceWorker.controller.onstatechange = function (event) {
//       if (event.target.state === 'redundant') {
//         material.toaster('A new version of this app is available.', 0, true); // duration 0 indications shows the toast indefinitely.
//         // window.location.reload();
//       }
//     };
//   }
// }
