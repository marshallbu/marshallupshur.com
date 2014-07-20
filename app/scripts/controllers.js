/*global define: false, require: false */
(function (
    angular, 
    NavCtrl, 
    FeedCtrl, 
    // ResumeCtrl, 
    PhotosCtrl, 
    FooterCtrl 
    // NikeCtrl
) {
  'use strict';

  return angular.module('myApp.controllers', ['myApp.services'])

    .controller('NavCtrl', ['$scope', function($scope) {
        // injector method takes an array of modules as the first argument
        // if you want your controller to be able to use components from
        // any of your other modules, make sure you include it together with 'ng'
        // Furthermore we need to pass on the $scope as it's unique to this controller
        angular.injector(['ng']).invoke(NavCtrl, this, {'$scope': $scope});
    }])

    .controller('FeedCtrl', ['$scope', function($scope) {
        angular.injector(['ng', 'myApp.services']).invoke(FeedCtrl, this, {'$scope': $scope});
    }])

    // .controller('ResumeCtrl', ['$scope', 'CONFIG', function($scope, CONFIG) {
        
    //     angular.injector.invoke(ResumeCtrl, this, {
    //         '$scope': $scope,
    //         'CONFIG': CONFIG
    //     });

    // }])

    .controller('PhotosCtrl', ['$scope', function($scope) {
        angular.injector(['ng', 'myApp.services']).invoke(PhotosCtrl, this, {'$scope': $scope});
    }])

    .controller('FooterCtrl', ['$scope', function($scope) {
        angular.injector(['ng', 'myApp.services']).invoke(FooterCtrl, this, {'$scope': $scope});
    }]);

    // .controller('NikeCtrl', ['$scope', 'CONFIG', function($scope, CONFIG) {
        
    //     angular.injector.invoke(NikeCtrl, this, {
    //         '$scope': $scope,
    //         'CONFIG': CONFIG
    //     });

    // }]);

})(
    require('angular'),
    require('./controllers/navctrl'),
    require('./controllers/feedctrl'),
    // require('./controllers/resumectrl'),
    require('./controllers/photosctrl'),
    require('./controllers/footerctrl')
    // require('./controllers/nikectrl')
);