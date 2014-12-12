
var ContactModalCtrl = ['$rootScope', '$scope', '$http', '$log', 'version',
function ($rootScope, $scope, $http, $log, version) {
  $scope.modalLoaded = false;

  $('#contact-modal').on('shown.bs.modal', function (e) {
    $scope.modalLoaded = true;
    $scope.$apply();
  });

  $scope.map = {
    center: {
      latitude: 45.5225351,
      longitude: -122.6785405
    },
    zoom: 14,
    options: {
      draggable: false,
      scrollwheel: false,
      disableDefaultUI: true,
      disableDoubleClickZoom: true
    }
  };

  $log.info('ContactModalCtrl initialized');
}
];

module.exports = ContactModalCtrl;
