/*global require: false */
require.config({
  // baseUrl: "js/",
  paths: {
    // app: "../app",
    jquery: '../assets/vendor/jquery/jquery.min',
    'jquery.scrollTo': '../assets/vendor/jquery.scrollTo/jquery.scrollTo.min',
    angular: '../assets/vendor/angular/angular.min',
    angularResource: '../assets/vendor/angular-resource/angular-resource.min',
    'adaptive-speech': '../assets/vendor/angular-adaptive-speech/src/adaptive-speech',
    lodash: '../assets/vendor/lodash/dist/lodash.underscore.min',
    'underscore.string': '../assets/vendor/underscore.string/dist/underscore.string.min',
    bootstrap: 'lib/bootstrap.min',
    'pdf-compatibility': 'lib/pdf/compatibility.min',
    'pdf-l10n': 'lib/pdf/l10n.min',
    'pdf': 'lib/pdf/pdf.min',
    'pdf-viewer': 'lib/pdf/viewer.min',
    ssp: [
      '//photos.marshallupshur.com/slideshowpro/m/embed',
      'lib/ssp/embed'
    ]
  },
  shim: {
    'jquery.scrollTo': ['jquery'],
    angular: {
      exports: 'angular'
    },
    angularResource: ['angular'],
    lodash: {
      exports: '_'
    },
    'underscore.string': ['lodash'],
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
  'app',
  'routes'
], function ($, scrollTo, bootstrap, angular, angularResource, app, routes) {
  'use strict';
  $(document).ready(function () {
    var $html = $('html');
    angular.bootstrap($html, [app.name]);
    // Because of RequireJS we need to bootstrap the app app manually
    // and Angular Scenario runner won't be able to communicate with our app
    // unless we explicitely mark the container as app holder
    // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
    $html.attr('ng-app','');

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
