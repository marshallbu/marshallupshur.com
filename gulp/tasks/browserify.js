var gulp = require('gulp'),
    browserify = require('browserify'),
    shim = require('browserify-shim'),
    shims = require('./../utils/shims'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    config = require('./../utils/config');

gulp.task('browserify', ['browserify-libs'], function () {
    // return browserify(config.src.file.app)
    //         .external(Object.keys(shims))
    //         .bundle({ debug: true })
    //         .pipe(source(config.build.file.app))
    //         .pipe(gulp.dest(config.build.dir.scripts));
});