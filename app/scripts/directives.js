(function (angular, services) {
    'use strict';

    return angular.module('myApp.directives', ['myApp.services'])
        .directive('appVersion', ['version', function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
    }]);

})(
    require('angular'),
    require('./services')
);