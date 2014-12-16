var MainCtrl = ['$rootScope', '$scope', '$log',
  function ($rootScope, $scope, $log) {
    // will use this to enable/disable functionality in the future
    $rootScope.switches = {};

    $log.info('MainCtrl:initialized');
  }
];

module.exports = MainCtrl;
