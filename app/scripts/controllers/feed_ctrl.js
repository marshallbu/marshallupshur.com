var _ = require('lodash'),
    app = require('app');

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
    $log.info('FeedCtrl initialized');
  }
];

module.exports = FeedCtrl;
