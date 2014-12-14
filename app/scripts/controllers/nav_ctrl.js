
var NavCtrl = ['$scope', '$log',
  function ($scope, $log) {

    $scope.scroll = function scroll(anchor) {
      $('body').stop().scrollTo(anchor, 500);
      $('#mbu_main_navbar').collapse('hide');
    };

    // $scope.$apply();
    $log.info('NavCtrl initialized');
  }
];

module.exports = NavCtrl;
