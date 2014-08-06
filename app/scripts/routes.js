var routes = ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
}];

module.exports = routes;
