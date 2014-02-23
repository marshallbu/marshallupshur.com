/*global require: false */
require.config({
  paths: {
    jquery:               '../../assets/vendor/jquery/dist/jquery.min',
    jqueryui:             '../../assets/vendor/jquery-ui/ui/minified/jquery-ui.min',
    jqueryScrollTo:       '../../assets/vendor/jquery.scrollTo/jquery.scrollTo.min',
    angular:              '../../assets/vendor/angular/angular.min',
    angularResource:      '../../assets/vendor/angular-resource/angular-resource.min',
    angularRoute:         '../../assets/vendor/angular-route/angular-route.min',
    angularSanitize:      '../../assets/vendor/angular-sanitize/angular-sanitize.min',
    angularAdaptiveSpeech:'../../assets/vendor/angular-adaptive-speech/angular-adaptive-speech.min',
    lodash:               '../../assets/vendor/lodash/dist/lodash.underscore.min',
    bootstrap:            '../../assets/vendor/bootstrap/dist/js/bootstrap.min',
    pdfCompatibility:     'lib/pdf/compatibility',
    pdfl10n:              'lib/pdf/l10n',
    pdf:                  'lib/pdf/pdf',
    pdfViewer:            'lib/pdf/viewer',
    ssp:                  'lib/ssp/embed'
  },
  shim: {
    jqueryScrollTo: ['jquery'],
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
    // pdfCompatibility: ['jquery'],
    pdfl10n: ['pdfCompatibility'],
    pdf: ['pdfl10n'],
    pdfViewer: ['pdf']
  }
});

require([
  'jquery',
  'jqueryScrollTo',
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
