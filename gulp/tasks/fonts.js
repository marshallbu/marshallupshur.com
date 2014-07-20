var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('fonts', function() {
    return gulp
        .src(config.src.glob.fonts)
        .pipe(plugins.changed(config.build.dir.font))
        .pipe(gulp.dest(config.build.dir.font));
});