var gulp = require('gulp');
var del = require('del');
var config = require('./../utils/config');

gulp.task('clean', function (callback) {
    del([config.tmpRoot, config.distRoot], callback);
});
