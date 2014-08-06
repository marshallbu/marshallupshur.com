var app = require('app'),
    // have to pass jQuery here b/c of contributed box brilliance
    // (although I understand the need to)
    viewer = require('viewer')($);

var ResumeCtrl = ['$scope', '$http', '$log',
    function ($scope, $http, $log) {
        $scope.showResumeContainer = false;

        var resumeViewer = viewer.createViewer('#resume-view .viewer', {
            url: 'https://view-api.box.com/1/sessions/f40452598c684dcbb5e80b3fd7ed5d8b/assets/',
            // layout: viewer.LAYOUT_PRESENTATION
        });
        resumeViewer.load();

        $scope.showResumeContainer = true;

        $log.info('ResumeCtrl initialized');
    }
];

module.exports = ResumeCtrl;
