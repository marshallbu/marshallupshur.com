/**
 * The main controller for the app. The controller:
 * - retrieves and persist the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */

(function (_, app) {
    'use strict';

    var FeedCtrl = ['$scope', '$http', '$log', 'FeedService',
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
      
        // $scope.$apply();
        }
    ];

    module.exports = FeedCtrl;

    return FeedCtrl;
})(
    require('lodash'),
    require('./../app')
);