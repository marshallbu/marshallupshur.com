var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('template-include', [], function() {
    gulp.src(config.buildRoot + 'index.html')
        .pipe(plugins.fileInclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest(config.buildRoot));

});