/*global define: false */

(function (app) {
  'use strict';

  var ResumeCtrl = ['$scope', '$http', '$log',
    function ($scope, $http, $log) {
      $scope.showResumeContainer = false;

      $scope.showResumeContainer = true;

  }];

  module.exports = ResumeCtrl;

  return ResumeCtrl;
}(
  require('./../app')
));