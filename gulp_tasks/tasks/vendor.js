var gulp = require('gulp'),
    config = require('./../utils/config');

gulp.task('vendor', function () {
  return gulp
    .src(config.src.glob.vendorScripts)
    .pipe(gulp.dest(config.dist.dir.vendorScripts));
});
