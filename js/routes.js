/*global define: false */
define([
  'angular',
  'app'
], function(angular, app) {
  'use strict';

  return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
  }]);

});