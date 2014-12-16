var _ = require('lodash'),
    app = require('app');

var FeedCtrl = ['$scope', '$http', '$log', 'FeedService',
  function ($scope, $http, $log, Feed) {
    $scope.feeds = [];
    var url = 'http://blog.marshallupshur.com/feed/';
    
    Feed.parseFeed(url, 3).then(
      function onSuccess(res) {
        $log.log('FeedCtrl:success Successfully fetched blog feeds');
        var feeds = res.data.responseData.feed.entries;
        _.forEach(feeds, function(feed) {
          feed.publishedDateObject = new Date(feed.publishedDate);
        });

        $scope.feeds = feeds;
        // $log.log($scope.feeds);

        $scope.$apply();
      },
      function onError(error) {
        $log.error('FeedCtrl:error Error getting blog feeds: ', error);
        $scope.showFeedsError = true;
      });

    // $scope.$apply();
    $log.info('FeedCtrl:initialized');
  }
];

module.exports = FeedCtrl;
