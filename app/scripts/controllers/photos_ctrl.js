var app = require('app');

var PhotosCtrl = ['$scope', '$http', '$log', 'FeedService',
    function ($scope, $http, $log, Feed) {
        $scope.photos = [];

        Feed.parseFeed('http://testphotos.marshallupshur.com/feed/albums/1/recent.rss', 5).then(function (res) {
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

            $scope.$apply();
        });


        $scope.$on('startCarousel', function(ngRepeatFinishedEvent) {
          $log.log('after loading photos');

          $('#photos-slider').carousel();
        });

    }
];

module.exports = PhotosCtrl;

return PhotosCtrl;
