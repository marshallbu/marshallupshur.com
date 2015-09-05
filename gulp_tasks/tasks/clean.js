var gulp = require('gulp');
var del = require('del');
var config = require('./../utils/config');

gulp.task('clean', function (callback) {
    del.sync([config.tmpRoot, config.distRoot]);
    callback();
});
