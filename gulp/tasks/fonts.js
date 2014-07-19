var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('fonts', function() {
    return gulp
        .src(config.src.glob.images)
        .pipe(plugins.changed(config.build.dir.images))
        .pipe(gulp.dest(config.build.dir.images));
});