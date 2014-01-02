/*global define: false */

define([
  'app'
], function (app) {
  'use strict';

  /**
   * 
   */
  return ['$scope', 'CONFIG', '$log', '$location', '$timeout', 'NikePlusService',
    function ($scope, CONFIG, $log, $location, $timeout, NikePlusService) {
      var promise;


      promise = NikePlusService.listActivities();

      promise.then(function (response) {
        $log.log('NikePlusService listActivities response:', response);

        // $scope.$apply();
      }, function (reason) {
        $log.log('NikePlusService listActivities error:', reason);

      });

    }
  ];

});