/*global require: false */
require.config({
  // baseUrl: "js/",
  paths: {
    // app: "../app",
    jquery:               '../assets/vendor/jquery/jquery.min',
    jqueryui:             '../assets/vendor/jquery-ui/ui/minified/jquery-ui.min',
    'jquery.scrollTo':    '../assets/vendor/jquery.scrollTo/jquery.scrollTo.min',
    angular:              '../assets/vendor/angular/angular',
    angularResource:      '../assets/vendor/angular-resource/angular-resource',
    angularRoute:         '../assets/vendor/angular-route/angular-route',
    angularSanitize:      '../assets/vendor/angular-sanitize/angular-sanitize',
    angularAdaptiveSpeech:'../assets/vendor/angular-adaptive-speech/angular-adaptive-speech.min',
    lodash:               '../assets/vendor/lodash/dist/lodash.underscore.min',
    bootstrap:            '../assets/vendor/bootstrap/dist/js/bootstrap.min',
    'pdf-compatibility':  'lib/pdf/compatibility.min',
    'pdf-l10n':           'lib/pdf/l10n.min',
    'pdf':                'lib/pdf/pdf.min',
    'pdf-viewer':         'lib/pdf/viewer.min',
    ssp:                  'lib/ssp/embed'
  },
  shim: {
    'jquery.scrollTo': ['jquery'],
    angular: {
      exports: 'angular'
    },
    angularResource: ['angular'],
    angularRoute: ['angular'],
    angularSanitize: ['angular'],
    angularAdaptiveSpeech: ['angular'],
    lodash: {
      exports: '_'
    },
    bootstrap: ['jquery'],
    // 'pdf-compatibility': ['jquery'],
    'pdf-l10n': ['pdf-compatibility'],
    'pdf': ['pdf-l10n'],
    'pdf-viewer': ['pdf']
  }
});

require([
  'jquery',
  'jquery.scrollTo',
  'bootstrap',
  'angular',
  'angularResource',
  'angularRoute',
  'angularSanitize',
  'angularAdaptiveSpeech',
  'app',
  'routes'
], function ($, scrollTo, bootstrap, angular, angularResource, angularRoute, angularSanitize, angularAdaptiveSpeech, app, routes) {
  'use strict';

  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function() {
    $html.addClass('ng-app');
    angular.bootstrap($html, [app.name]);
  });

  $(document).ready(function () {

    // TODO: move to a directive
    var navLinks;

    $('#creations-slider.carousel').carousel();

    navLinks = function(clicked) {
      var itemId;
      itemId = clicked.attr('href');
      return $('body').stop().scrollTo(itemId, 500);
    };

    $('a.scrollto').click(function() {
      var nav_clicked;
      nav_clicked = $(this);
      navLinks(nav_clicked);
      return false;
    });

    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh');
    });
  });
});
