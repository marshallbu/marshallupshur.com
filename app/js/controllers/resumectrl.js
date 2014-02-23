/*global define: false */

define([
  'app',
  'pdfCompatibility',
  'pdfl10n',
  'pdf',
  'pdfViewer'
], function (app) {
  'use strict';

  return ['$scope', 'CONFIG', '$http', '$log',
    function ($scope, CONFIG, $http, $log) {
      $scope.showResumeContainer = false;

      // override some PDFJS variables defined in worker so I won't have
      // to change viewer.js as much in the future
      window.DEFAULT_URL = 'app/fs/Marshall_Upshur_2013b_web.pdf';
      window.SCALE_SELECT_CONTAINER_PADDING = 40;
      PDFJS.imageResourcesPath = 'app/img/pdf/';
      PDFJS.workerSrc = 'app/js/lib/pdf/pdf.worker.min.js';
      
      webViewerLoad();

      $scope.showResumeContainer = true;
      $scope.resumeUrl = CONFIG.RESUME_URL;
      $scope.$apply();
  }];
});