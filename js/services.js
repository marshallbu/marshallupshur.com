define([
  'angular'
], function (angular) {
  'use strict';

  angular.module('myApp.services', [])
    .value('version', '0.2.3')

    .factory('FeedService', ['$http', function($http) {
      return {
        parseFeed: function(url, count) {
          var numberOfFeeds = count || 6;
          return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + numberOfFeeds + '&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
      };
    }]);
});