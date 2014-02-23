<?php

class Config {
  private $baseUrl;
  private $configPaths;

  function __construct() {
    $baseUrl = dirname(__FILE__) . DIRECTORY_SEPARATOR;

    $this->configPaths = array(
      $baseUrl . '*.default.json',
      $baseUrl . './*.local.json',
    );
  }

  /**
   * returns an associative array of config data
   * @return Array 
   */
  function getConfig() {
    // hold our final config to return
    $configResults = array();

    // loop through and find configs, when one is found, merge with our config
    // results array
    foreach ($this->configPaths as $configPath) {
      $configs = glob($configPath);

      // get real paths, read in, and merge
      // make sure $configs isn't false due to glob()
      if ($configs) {

        foreach ($configs as $config) {
          $configData = file_get_contents($config);
          $jsonArr = json_decode($configData, true);

          if ($configData && $jsonArr) {
            $configResults = array_replace_recursive($configResults, $jsonArr);
          }
        }

      }
      
    }

    return $configResults;
  }

}

