
var ContactModalCtrl = ['$rootScope', '$scope', '$window', '$http', '$log', 'uiGmapGoogleMapApi',
function ($rootScope, $scope, $window, $http, $log, uiGmapGoogleMapApi) {
    $scope.modalLoaded = false;

    $scope.map = {
        center: {
            latitude: 45.5225351,
            longitude: -122.6785405
        },
        zoom: 14,
        options: {
            backgroundColor: '#ffffff',
            draggable: false,
            scrollwheel: false,
            disableDefaultUI: true,
            disableDoubleClickZoom: true
        }
    };

    $scope.marker = {
        id: 0,
        coords: {
            latitude: 45.5225351,
            longitude: -122.6785405
        }
    };

    uiGmapGoogleMapApi.then(function(maps) {
        $scope.marker.options = {
            animation: maps.Animation.DROP
        };
    });

    $('#contact-modal').on('shown.bs.modal', function (e) {
        $scope.modalLoaded = true;
        $scope.$apply();
    });

    $log.info('ContactModalCtrl initialized');
}];

module.exports = ContactModalCtrl;
