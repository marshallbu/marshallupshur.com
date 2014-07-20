/*global define: false */

(function (angular, routes, translate) {
  'use strict';

  // Declare app level module
  var app = angular.module('myApp', [
      // 'myApp.config',
      'ngRoute',
      'ngResource',
      'ngSanitize',
      'pascalprecht.translate',
      'myApp.filters',
      'myApp.services',
      'myApp.directives',
      'myApp.controllers'
      // 'adaptive.speech'
  ])
  .config(routes)
  .config(translate);

  module.exports = app;

  return app;

}(
    require('angular'),
    require('./routes'),
    require('./translate'),
    // require('./config'),
    require('./filters'),
    require('./services'),
    require('./directives'),
    require('./controllers')
));
