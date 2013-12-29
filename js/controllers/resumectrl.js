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

      // override some PDFJS variables defined in worker so I won't have
      // to change viewer.js as much in the future
      window.DEFAULT_URL = 'fs/Marshall_Upshur_2013a.pdf';
      PDFJS.imageResourcesPath = 'images/pdf/';
      PDFJS.workerSrc = 'js/lib/pdf/pdf.worker.js';

      
      webViewerLoad();

      $scope.showResumeContainer = true;
      $scope.$apply();
  }];
});