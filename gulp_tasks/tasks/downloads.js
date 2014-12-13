var gulp = require('gulp'),
    isProduction = process.env.NODE_ENV === 'production',
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('downloads', function() {
  return gulp
    .src(config.src.glob.downloads)
    .pipe(plugins.changed(config.dist.dir.downloads))
    .pipe(gulp.dest(config.dist.dir.downloads));
});
