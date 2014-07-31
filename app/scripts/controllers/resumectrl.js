/*global define: false */

(function (app, viewer) {
    'use strict';

    var ResumeCtrl = ['$scope', '$http', '$log',
        function ($scope, $http, $log) {
            $scope.showResumeContainer = false;
            
            // var viewer = window.Crocodoc.createViewer('#resume-view .viewer', {
            //     url: 'https://view-api.box.com/1/sessions/f40452598c684dcbb5e80b3fd7ed5d8b/assets/'
            // });
            // viewer.load();

            $scope.showResumeContainer = true;
        }
    ];

    module.exports = ResumeCtrl;

    return ResumeCtrl;
}(
    require('./../app'),
    require('viewer')
));
