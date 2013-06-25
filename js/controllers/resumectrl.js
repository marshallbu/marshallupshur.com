/*global define: false */

define([
  'app',
  'pdf-compatibility',
  'pdf-l10n',
  'pdf',
  'pdf-viewer'
], function (app) {
  'use strict';

  return ['$scope', '$http', '$log',
    function ($scope, $http, $log) {
      
      webViewerLoad();

      $scope.showResumeContainer = true;
      $scope.$apply();
  }];
});