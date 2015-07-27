import React from 'react';

import App from './app.jsx';
import logger from './modules/logger';

var Main = {
    start() {
        logger.debug('%cI wish I was cool like the cool kids, hanging out at Google ' +
            'with the "culture fits"...', 'font-style: italic; color: #ff8000');

        React.initializeTouchEvents(true);

        React.render(<App />, document.getElementById('app'));
    }
};

Main.start();



// $(document).ready(function onDomReady() {
//
//   $('#creations-slider').carousel();
//
//   $('[data-spy="scroll"]').each(function () {
//     $(this).scrollspy('refresh');
//   });
//
//   $('[data-toggle="tooltip"]').tooltip();
// });
//
// if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
//   var msViewportStyle = document.createElement('style');
//   msViewportStyle.appendChild(
//     document.createTextNode(
//       '@-ms-viewport{width:auto!important}'
//     )
//   );
//   document.querySelector('head').appendChild(msViewportStyle);
// }
