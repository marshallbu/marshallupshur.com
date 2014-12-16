
var FooterCtrl = ['$scope', '$http', '$log', 'version',
  function ($scope, $http, $log, version) {
    $scope.version = version;

    // $scope.$apply();
    $log.info('FooterCtrl initialized');
    $log.debug('Sniffing around? Email me(at)marshallupshur.com if you find any foobars!');
  }
];

module.exports = FooterCtrl;
