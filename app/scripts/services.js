var angular = require('angular');

/**
 * set up generic myApp.services namespace
 */
var servicesModule = angular.module('myApp.services', [/*'myApp.config',*/ 'ngResource']);

servicesModule.value('version', '0.0.0');

servicesModule.factory('FeedService', ['$http', function($http) {
  var service = {};

  service.parseFeed = function parseFeed(url, count) {
    var numberOfFeeds = count || 6;
    return $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' +
        numberOfFeeds + '&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
  };

  return service;
}]);

module.exports = servicesModule;
