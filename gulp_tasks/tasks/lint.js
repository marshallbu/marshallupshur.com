var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./../utils/config');

gulp.task('lint', function () {
  return gulp.src(config.src.glob.scripts)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format());
    // .pipe(plugins.eslint.failAfterError());
});
