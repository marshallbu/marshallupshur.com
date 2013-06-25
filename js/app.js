/*global define: false */
define([
  'angular',
  'services',
  'directives',
  'controllers'
  ], function (angular, services, directives, controllers) {
    'use strict';

    return angular.module('myApp', ['myApp.controllers', 'myApp.services', 'myApp.directives']);
});