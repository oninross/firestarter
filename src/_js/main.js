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

import './common/_modernizr';

// for testing a11y only.  Remove before integration
import './common/tota11y.min';

import MaterialDesign from './common/_material-design';

import Header from '../_modules/header/header';
import Navigation from '../_modules/navigation/navigation';
import Galisteners from '../_modules/galisteners/galisteners';
import TablePreview from '../_modules/table-preview/table-preview';
import ServiceWorker from '../_modules/serviceworker/serviceworker';


$(() => {
    new Header();
    new Navigation();
    new TablePreview();

    // Init Material Design
    const material = new MaterialDesign();
    material.init();


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


    // JavaScript hack for opening links into new windows if target="_blank" is not set
    let a = new RegExp('/' + window.location.host + '/');
    $('a').click(function () {
        if (!a.test(this.href)) {
            window.open($(this).attr('href'));
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


    // Simple Service Worker to make App Install work (OPTIONAL)
    // new ServiceWorker();


    material.toaster("I'm a firestarter!!!", 0);
    console.log("I'm a firestarter!!!");
});
