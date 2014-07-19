var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('clean', function (callback) {

    return gulp
        .src(config.buildRoot, {read: false})
        .pipe(plugins.rimraf());    
});