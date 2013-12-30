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
      'RESUME_URL': 'fs/Marshall_Upshur_2013b.pdf',
      'RESUME_WEB_URL': 'fs/Marshall_Upshur_2013b_web.pdf'
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