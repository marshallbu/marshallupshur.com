/*global define: false */
define([
  'angular',
  'config',
  'filters',
  'services',
  'directives',
  'controllers'
  ], function (angular) {
    'use strict';

    // Declare app level module

    return angular.module('myApp', [
      'myApp.config',
      'ngRoute',
      'ngResource',
      'ngSanitize',
      'pascalprecht.translate',
      'myApp.filters',
      'myApp.services',
      'myApp.directives',
      'myApp.controllers',
      'adaptive.speech'
    ]);
});