(function (angular, services) {
    'use strict';

    return angular.module('myApp.directives', ['myApp.services'])
        .directive('appVersion', ['version', function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        }])

        /**
         * Directive to help emit when an ngRepeat directive is complete, allowing 
         * scope to watch for an event and run additional callbacks
         * @param  {Object} $timeout injected
         * @param  {Object} $log     injected
         * @return {Object}          directive config object
         */
        .directive('onFinishRender', ['$timeout', '$log', function ($timeout, $log) {
          return {
            restrict: 'A',
            link: function postLink(scope, element, attrs, controller) {
              if (scope.$last === true) {
                $log.log('onFinishRender: ', attrs.onFinishRender);
                $timeout(function () {
                  scope.$emit(attrs.onFinishRender, {"element": element});
                }, 0);
              }
            }
          };
        }]);

})(
    require('angular'),
    require('./services')
);