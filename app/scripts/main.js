var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var Main = {
    start() {
        React.initializeTouchEvents(true);

        Router.run(routes, Router.HashLocation, (Handler) => {
            React.render(
                <Handler />,
                document.body
            );
        });
    }
};

module.exports = Main;

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
