const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./../utils/config');

gulp.task('bower', function() {
    return plugins.bower({
        directory: config.vendorRoot,
    });
    // .pipe(gulp.dest(config.sourceRootDir + 'vendor/'));
});
