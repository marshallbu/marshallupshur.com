var gulp = require('gulp'),
config = require('./../utils/config');

gulp.task('vendor', function () {
  return gulp
  .src(config.src.glob.vendorScripts, {dot: true})
  .pipe(gulp.dest(config.dist.dir.vendorScripts));
});
