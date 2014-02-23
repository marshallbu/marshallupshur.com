/*global define: false */
define([
  'angular'
], function (angular) {
  'use strict';

  /**
   * Global config object
   * @type {Object}
   */
  var configData = {
    'CONFIG': {
      'RESUME_URL': 'app/fs/Marshall_Upshur_2013b.pdf',
      'RESUME_WEB_URL': 'app/fs/Marshall_Upshur_2013b_web.pdf',
      'NIKE_API': {
        'ACCESS_TOKEN': '26ee305127cbb4ddbf72c51a31f7dac',
        'ENDPOINT_BASE_URL': 'https://api.nike.com/me/sport'
      }
    }
  };

  /**
   * Angular module namespace
   * @type {Object}
   */
  var config = angular.module('myApp.config', []);

  /**
   * create a constant value in the module name space for each config option
   */
  angular.forEach(configData, function(value, key){
    config.constant(key, value);
  });

});