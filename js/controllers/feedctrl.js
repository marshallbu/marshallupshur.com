/*jshint globalstrict: true*/
/*global define: false */
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persist the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */

define([
  'lodash',
  'app'
], function (_, app) {

  return ['$scope', '$http', '$log', 'FeedService',
    function ($scope, $http, $log, Feed) {
      $scope.feeds = [];

      Feed.parseFeed('http://blog.marshallupshur.com/feed/', 3).then(function (res) {
        var feeds = res.data.responseData.feed.entries;
        _.forEach(feeds, function(feed) {
          feed.publishedDateObject = new Date(feed.publishedDate);
        });
        $scope.feeds = feeds;
        // $log.log($scope.feeds);

        $scope.$apply();
      });
      
      $scope.$apply();
  }];
});


// define([], function() {
//   return ['$scope', '$http', function($scope, $http) {
//     // You can access the scope of the controller from here
//     $scope.welcomeMessage = 'hey this is myctrl2.js!';

//     // because this has happened asynchroneusly we've missed
//     // Angular's initial call to $apply after the controller has been loaded
//     // hence we need to explicityly call it at the end of our Controller constructor
//     $scope.$apply();
//   }];
// });