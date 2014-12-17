var MainCtrl = ['$rootScope', '$scope', '$log',
  function ($rootScope, $scope, $log) {
    // will use this to enable/disable functionality in the future
    $rootScope.switches = {};

    $log.debug('%cI wish I was cool like the cool kids, hanging out at Google with the "culture fits"...', 'font-style: italic; color: #ff8000');

    $log.info('MainCtrl:initialized');
  }
];

module.exports = MainCtrl;
