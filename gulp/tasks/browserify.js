var gulp = require('gulp'),
    browserify = require('browserify'),
    shims = require('./../utils/shims'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    config = require('./../utils/config');

gulp.task('browserify', ['browserify:libs'], function () {
    return browserify({
            entries: config.src.file.app,
            debug: true
        })
        .external(Object.keys(shims))
        .bundle()
        .pipe(source(config.dist.file.app))
        .pipe(gulp.dest(config.dist.dir.scripts));
});
