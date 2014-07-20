/*global define: false */

(function () {
    'use strict';

    var FooterCtrl = ['$scope', '$http', '$log', 'version',
        function ($scope, $http, $log, version) {
            $scope.version = version;

            // $scope.$apply();

            $log.info('FooterCtrl initialized');
        }
    ];

    module.exports = FooterCtrl;

    return FooterCtrl;
})(
);