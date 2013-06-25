/*global define: false */
define([
  'angular',
  'app',
], function(angular, app) {
  'use strict';

  return app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.otherwise({redirectTo: '/'});

  }]);

});