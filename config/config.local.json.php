<?php
header('Content-type: application/json; charset=utf-8;');

try {
  require 'Config.php';
  $appConfig = new Config();

  // either we have real output, or false, in which case just output empty object
  $output = json_encode($appConfig->getConfig(), JSON_FORCE_OBJECT);

  if ($output) {
    echo $output;
  } else { 
    echo "{}";
  }

} catch (Exception $e) {
  echo "{}";
}

