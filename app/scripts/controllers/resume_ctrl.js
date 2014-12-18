var app = require('app'),
    viewer = require('viewer')($);

var ResumeCtrl = ['$scope', '$http', '$log',
  function ($scope, $http, $log) {
    $scope.showResumeContainer = false;
    $scope.scrollBlockerDisabled = false;

    var resumeViewer = viewer.createViewer('#resume-view .viewer', {
      url: 'https://view-api.box.com/1/sessions/c50295f8aed5422ca1a13a0483688c00/assets/',
      // layout: viewer.LAYOUT_PRESENTATION
    });
    resumeViewer.load();
    $scope.showResumeContainer = true;

    $scope.disableScrollBlocker = function disableScrollBlocker() {
      $scope.scrollBlockerDisabled = true;
    };

    $log.info('ResumeCtrl:initialized');
  }
];

module.exports = ResumeCtrl;
