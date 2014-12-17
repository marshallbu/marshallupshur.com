var angular = require('angular'),
    routes = require('routes'),
    // translate = require('translate'),
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
  // 'pascalprecht.translate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'uiGmapgoogle-maps',
  'famous.angular'
  // 'adaptive.speech'
])
.config(routes)
// .config(translate)
.config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyD1QWpO55KK2zhjKZ2gA9vnBie6GZvrqRE',
    v: '3.18',
    libraries: 'geometry,visualization,drawing'
  });
});

module.exports = app;
