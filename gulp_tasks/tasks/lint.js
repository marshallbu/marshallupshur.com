var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('lint', function () {
  return gulp.src(config.src.glob.scripts)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});
