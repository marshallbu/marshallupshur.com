/*global define: false */

define([
  'app'
], function (app) {
  'use strict';

  return ['$scope', '$http', '$log', 'version',
    function ($scope, $http, $log, version) {
      $scope.version = version;

      $scope.$apply();
  }];
});