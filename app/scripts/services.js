/*global define: false */

(function (angular) {
    'use strict';

    /**
     * set up generic myApp.services namespace
     */
    var servicesModule = angular.module('myApp.services', [/*'myApp.config',*/ 'ngResource']);

    servicesModule.value('version', '0.4.0');

    servicesModule.factory('FeedService', ['$http', function($http) {
        var service = {};

        service.parseFeed = function parseFeed(url, count) {
            var numberOfFeeds = count || 6;
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + 
                numberOfFeeds + '&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        };

        return service;
    }]);

    // servicesModule.factory('NikePlusService', ['$http', '$log', 'CONFIG', function($http, $log, CONFIG) {
    //     var service = {};

    //     service.listActivities = function listActivities() {
    //         var nikeAPI = CONFIG.NIKE_API;
    //         var activitiesURL = nikeAPI.ENDPOINT_BASE_URL + '/activities?access_token=' + nikeAPI.ACCESS_TOKEN;

    //     return $http.get(activitiesURL)
    //         .success(function(response, status, headers, config) {
    //             $log.log('nike plus activities: ', response, status, headers, config);

    //             return response;
    //         })
    //         .error(function(response, status, headers, config) {
    //             $log.log('error retrieving nike plus activities', response, status, headers, config);

    //         });
    //     };

    //     return service;
    // }]);

    return servicesModule;

})(
  require('angular')
);