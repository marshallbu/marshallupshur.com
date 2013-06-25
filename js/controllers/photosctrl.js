/*global define: false */

define([
  'app',
  'ssp'
], function (app, ssp) {
  'use strict';

  return ['$scope', '$http', '$log',
    function ($scope, $http, $log) {

      $scope.myssp = new SlideShowPro({
        attributes: {
          id: "album-7",
          width: "100%",
          height: "100%"
        },
        mobile: {
          auto: false,
          poster: "vignette"
        },
        params: {
          bgcolor: "#000000",
          allowfullscreen: true
        },
        flashvars: {
          xmlFilePath: "http://photos.marshallupshur.com/slideshowpro/images.php?album=7",
          navAppearance: "Hidden",
          navLinkAppearance: "Numbers",
          feedbackPreloaderAppearance: "Bar",
          feedbackTimerAppearance: "Hidden",
          contentScale: "Crop to Fit All",
          transitionLength: 1,
          panZoom: "On",
          contentOrder: "Random"
        }
      });

      $scope.$apply();
  }];
});