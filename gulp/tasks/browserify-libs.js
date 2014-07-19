var gulp = require('gulp'),
    browserify = require('browserify'),
    shims = require('./../utils/shims'),
    source = require('vinyl-source-stream'),
    config = require('./../utils/config');

gulp.task('browserify-libs', function () {
    return browserify('./gulp/utils/libs.js')
        // .transform('browserify-shim')
        // .require(Object.keys(shims))
        .bundle({ debug: true })
        .pipe(source(config.build.file.libs))
        .pipe(gulp.dest(config.build.dir.scripts));
});