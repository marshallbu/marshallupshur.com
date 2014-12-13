var angular = require('angular'),
    services = require('services');

var filters = angular.module('myApp.filters', ['myApp.services']);

filters.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

module.exports = filters;
