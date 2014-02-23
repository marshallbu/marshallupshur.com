({
  baseUrl: "../app/js/",
  mainConfigFile: '../app/js/main.js',
  name: "main",
  excludeShallow: [

  ],
  out: "../app/js/main.min.js",
  findNestedDependencies: true,
  optimize: "uglify"
})