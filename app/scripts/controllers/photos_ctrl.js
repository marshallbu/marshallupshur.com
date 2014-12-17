var app = require('app'),
    _ = require('lodash');

var PhotosCtrl = ['$scope', '$http', '$log', 'FeedService',
  function ($scope, $http, $log, Feed) {
    $scope.photos = [];
    $scope.showPhotosContainer = false;
    var url = 'http://testphotos.marshallupshur.com/feed/albums/1/recent.rss';

    Feed.parseFeed(url, 5).then(
      function onSuccess(res) {
        $log.log('PhotosCtrl:success Successfully fetched photo feed');
        var entries = res.data.responseData.feed.entries;
        $scope.photos = _.map(entries, function(entry) {
          var contents = entry.mediaGroups[0].contents[0];
          var pubDate = new Date(entry.publishedDate);

          return {
            src: contents.url.replace('medium_large', 'huge'),
            alt: contents.title,
            desc: contents.description,
            date: pubDate
          };
        });
        $scope.showPhotosContainer = true;

        $scope.$apply();
      },
      function onError(error) {
        $log.error('PhotosCtrl:error Error getting photo feed: ', error);
        $scope.showPhotosError = true;
      });

    $scope.$on('startCarousel', function(/*ngRepeatFinishedEvent*/) {
      $log.log('PhotosCtrl:startCarousel photos loaded');
      $('#photos-slider').carousel();
    });

    $log.info('PhotosCtrl:initialized');
  }
];

module.exports = PhotosCtrl;
