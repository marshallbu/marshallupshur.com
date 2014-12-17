
var NavCtrl = ['$scope', '$log', '$window',
  function ($scope, $log, $window) {

    $scope.scroll = function scroll(anchor, e) {
      e.preventDefault();

      function afterScroll() {
        
      }

      $('body').stop().scrollTo(anchor, 500, { onAfter: afterScroll });

      // TODO: this is dirty, Bootstrap should provide a better way to check if
      // navbar is in hamburger mode
      if ($window.innerWidth < 768) {
        $('#mbu_main_navbar').collapse('hide');
      }

    };

    // $scope.$apply();
    $log.info('NavCtrl:initialized');
  }
];

module.exports = NavCtrl;
