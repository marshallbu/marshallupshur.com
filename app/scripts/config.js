/*global define: false */
define([
  'json!../../config/config.default.json',
  'json!../../config/config.local.json.php',
  'angular'
], function (projectConfig, projectLocalConfig, angular) {
  'use strict';

  /**
   * Global config object
   * @type {Object}
   */
  var configData = {};

  // let's merge any project config options into this config
  _.merge(configData, _.isObject(projectConfig) ? projectConfig : {});
  // console.log("merged config: ", configData);

  // check for a local config and merge that
  _.merge(configData, _.isObject(projectLocalConfig) ? projectLocalConfig : {});
  // console.log("merged local config: ", configData);

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