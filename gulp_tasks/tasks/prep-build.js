var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var mkdirp = require('mkdirp');
var log = require('./../utils/log');
var config = require('./../utils/config');

gulp.task('prep-build', function (callback) {
    Object.keys(config.tmp.dir).forEach(function(key){
        var dir = config.tmp.dir[key];

        mkdirp(dir, function (mkdirErr) {
            if (mkdirErr) {
                log.error('Cannot create directory:', plugins.util.colors.magenta(dir), plugins.util.colors.red(mkdirErr));
                throw mkdirErr;
            }
        });
    });

    Object.keys(config.dist.dir).forEach(function(key){
        var dir = config.dist.dir[key];

        mkdirp(dir, function (mkdirErr) {
            if (mkdirErr) {
                log.error('Cannot create directory:', plugins.util.colors.magenta(dir), plugins.util.colors.red(mkdirErr));
                throw mkdirErr;
            }
        });
    });

    callback();
});
