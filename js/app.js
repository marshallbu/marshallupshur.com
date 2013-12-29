/*global define: false */
define([
  'angular',
  'filters',
  'services',
  'directives',
  'controllers'
  ], function (angular, filters, services, directives, controllers) {
    'use strict';

    return angular.module('myApp', [
      'ngRoute',
      'ngResource',
      'ngSanitize',
      'myApp.controllers',
      'myApp.filters',
      'myApp.services',
      'myApp.directives'
    ]);
});