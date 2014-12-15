var gulp = require('gulp'),
    isProduction = process.env.NODE_ENV === 'production',
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('sqzr', function() {
  return gulp
    .src(config.src.glob.sqzr, {dot: true})
    .pipe(plugins.changed(config.dist.dir.sqzr))
    .pipe(gulp.dest(config.dist.dir.sqzr));
});
