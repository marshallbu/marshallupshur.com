/*global define: false */

(function () {
  'use strict';
  
  module.exports = ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);

  }];

}(
));