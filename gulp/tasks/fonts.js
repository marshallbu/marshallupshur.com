var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('fonts', function() {
    return gulp
        .src(config.src.glob.fonts)
        .pipe(plugins.changed(config.dist.dir.font))
        .pipe(gulp.dest(config.dist.dir.font));
});
