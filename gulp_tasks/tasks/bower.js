var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('bower', function() {
    return plugins.bower({
            directory: config.vendorRoot,
        });
        // .pipe(gulp.dest(config.sourceRootDir + 'vendor/'));
});