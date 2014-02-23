({
  baseUrl: "../app/js/",
  mainConfigFile: '../app/js/main.js',
  name: "main",
  excludeShallow: [
    'json!../../config/config.local.json.php'
  ],
  out: "../app/js/main.min.js",
  findNestedDependencies: true,
  optimize: "uglify"
})