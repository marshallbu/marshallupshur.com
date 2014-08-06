var angular = require('angular'),
    NavCtrl = require('./controllers/nav_ctrl'),
    FeedCtrl = require('./controllers/feed_ctrl'),
    ResumeCtrl = require('./controllers/resume_ctrl'),
    PhotosCtrl = require('./controllers/photos_ctrl'),
    FooterCtrl = require('./controllers/footer_ctrl');
    // NikeCtrl = require('./controllers/nike_ctrl')

var controllers = angular.module('myApp.controllers', ['myApp.services']);

controllers.controller('NavCtrl', ['$scope', function($scope) {
    // injector method takes an array of modules as the first argument
    // if you want your controller to be able to use components from
    // any of your other modules, make sure you include it together with 'ng'
    // Furthermore we need to pass on the $scope as it's unique to this controller
    angular.injector(['ng']).invoke(NavCtrl, this, {'$scope': $scope});
}]);

controllers.controller('FeedCtrl', ['$scope', function($scope) {
    angular.injector(['ng', 'myApp.services']).invoke(FeedCtrl, this, {'$scope': $scope});
}]);

controllers.controller('ResumeCtrl', ['$scope', function($scope) {

    angular.injector(['ng', 'myApp.services']).invoke(ResumeCtrl, this, {
        '$scope': $scope,
    });

}]);

controllers.controller('PhotosCtrl', ['$scope', function($scope) {
    angular.injector(['ng', 'myApp.services']).invoke(PhotosCtrl, this, {'$scope': $scope});
}]);

controllers.controller('FooterCtrl', ['$scope', function($scope) {
    angular.injector(['ng', 'myApp.services']).invoke(FooterCtrl, this, {'$scope': $scope});
}]);

// controllers.controller('NikeCtrl', ['$scope', 'CONFIG', function($scope, CONFIG) {

//     angular.injector.invoke(NikeCtrl, this, {
//         '$scope': $scope,
//         'CONFIG': CONFIG
//     });

// }]);

module.exports = controllers;
