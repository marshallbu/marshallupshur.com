/*global define: false */

(function (app) {
    'use strict';

    var FooterCtrl = ['$scope', '$http', '$log', 'version',
        function ($scope, $http, $log, version) {
            $scope.version = version;

            // $scope.$apply();
        }
    ];

    module.exports = FooterCtrl;

    return FooterCtrl;
})(
    require('./../app')
);