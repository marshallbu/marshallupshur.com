var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('compile-html', ['process-html'], function() {
    return gulp.src(config.distRoot + 'index.html')
        .pipe(plugins.fileInclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest(config.distRoot));

});
