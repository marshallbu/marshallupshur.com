var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var fs = require('fs');
var onlyImages = require('./../utils/imageFilter');
var config = require('./../utils/config');

gulp.task('partial-compile', function() {

    return gulp.src(config.src.dir.partials + 'analytics.html')
        .pipe(plugins.template())
        .pipe(gulp.dest(config.tmp.dir.partials));
});
