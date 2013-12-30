/*global define: false */
define([
  'angular',
  'config',
  'filters',
  'services',
  'directives',
  'controllers'
  ], function (angular, filters, services, directives, controllers) {
    'use strict';

    return angular.module('myApp', [
      'myApp.config',
      'ngRoute',
      'ngResource',
      'ngSanitize',
      'myApp.controllers',
      'myApp.filters',
      'myApp.services',
      'myApp.directives',
      'adaptive.speech'
    ]);
});