var angular = require('angular'),
    routes = require('routes'),
    translate = require('translate'),
    filters = require('filters'),
    services = require('services'),
    directives = require('directives'),
    controllers = require('controllers');

// Declare app level module
var app = angular.module('myApp', [
        // 'myApp.config',
        'ngRoute',
        'ngResource',
        'ngSanitize',
        'pascalprecht.translate',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers'
        // 'adaptive.speech'
    ])
    .config(routes)
    .config(translate);

module.exports = app;
