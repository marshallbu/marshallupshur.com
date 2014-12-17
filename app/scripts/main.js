var angular = require('angular'),
    app = require('app');

window.name = 'NG_DEFER_BOOTSTRAP!';

// var $html = angular.element(document.getElementsByTagName('html')[0]);

angular.element().ready(function onAngularReady() {
  angular.resumeBootstrap([app.name]);
});

$(document).ready(function onDomReady() {

  $('#creations-slider').carousel();

  $('[data-spy="scroll"]').each(function () {
    $(this).scrollspy('refresh');
  });
});

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  );
  document.querySelector('head').appendChild(msViewportStyle);
}
