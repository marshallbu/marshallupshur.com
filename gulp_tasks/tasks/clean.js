var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    del = require('del'),
    config = require('./../utils/config');

gulp.task('clean', function (callback) {
    del([config.distRoot], callback);
});
