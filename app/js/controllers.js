/*global define: false, require: false */
define([
  'angular'
], function (angular) {
  'use strict';

  return angular.module('myApp.controllers', ['myApp.services'])
    // Sample controller where service is being used
    // .controller('MyCtrl1', ['$scope', 'version', function ($scope, version) {
    //   $scope.scopedAppVersion = version;
    // }])
    // More involved example where controller is required from an external file

    .controller('NavCtrl', ['$scope', function($scope) {
      require(['controllers/navctrl'], function(navctrl) {
        angular.injector(['ng']).invoke(navctrl, this, {'$scope': $scope});
      });
    }])

    .controller('FeedCtrl', ['$scope', function($scope) {
      require(['controllers/feedctrl'], function(feedctrl) {
        // injector method takes an array of modules as the first argument
        // if you want your controller to be able to use components from
        // any of your other modules, make sure you include it together with 'ng'
        // Furthermore we need to pass on the $scope as it's unique to this controller
        angular.injector(['ng', 'myApp.services']).invoke(feedctrl, this, {'$scope': $scope});
      });
    }])

    .controller('ResumeCtrl', [
      '$scope', 
      'CONFIG', 
      '$injector', 
      function($scope, CONFIG, $injector) {
      require(['controllers/resumectrl'], function(resumectrl) {
        $injector.invoke(resumectrl, this, {
          '$scope': $scope,
          'CONFIG': CONFIG
        });
      });
    }])

    .controller('PhotosCtrl', ['$scope', function($scope) {
      require(['controllers/photosctrl'], function(photosctrl) {
        angular.injector(['ng', 'myApp.services']).invoke(photosctrl, this, {'$scope': $scope});
      });
    }])

    .controller('FooterCtrl', ['$scope', function($scope) {
      require(['controllers/footerctrl'], function(footerctrl) {
        angular.injector(['ng', 'myApp.services']).invoke(footerctrl, this, {'$scope': $scope});
      });
    }])

    .controller('NikeCtrl', [
      '$scope', 
      'CONFIG', 
      '$injector', 
      function($scope, CONFIG, $injector) {
      require(['controllers/nikectrl'], function(nikectrl) {
        $injector.invoke(nikectrl, this, {
          '$scope': $scope,
          'CONFIG': CONFIG
        });
      });
    }]);
});