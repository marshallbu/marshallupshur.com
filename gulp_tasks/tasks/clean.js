var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('clean', function (callback) {

    return gulp
        .src(config.distRoot, {read: false})
        .pipe(plugins.rimraf());
});
