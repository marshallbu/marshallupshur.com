var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    mkdirp = require('mkdirp'),
    log = require('./../utils/log');
    config = require('./../utils/config');

gulp.task('prep-build', function (callback) {

    Object.keys(config.build.dir).forEach(function(key){
        var dir = config.build.dir[key];

        mkdirp(dir, function (mkdirErr) {
            if (mkdirErr) {
                log.error('Cannot create directory:', plugins.util.colors.magenta(dir), plugins.util.colors.red(mkdirErr));
                throw mkdirErr;
            }
        });
    });

    callback();
});