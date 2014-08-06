var gulp = require('gulp'),
    browserify = require('browserify'),
    shims = require('./../utils/shims'),
    source = require('vinyl-source-stream'),
    config = require('./../utils/config');

gulp.task('browserify:libs', function () {
    return browserify({
            entries: './gulp/utils/libs.js',
            paths: [
                './node_modules',
                config.src.dir.scripts
            ],
            debug: true
        })
        .require(Object.keys(shims))
        .bundle()
        .pipe(source(config.dist.file.libs))
        .pipe(gulp.dest(config.dist.dir.scripts));
});
