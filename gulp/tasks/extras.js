var gulp = require('gulp'),
    config = require('./../utils/config');

gulp.task('extras', ['downloads'], function () {
    return gulp
        .src(['app/*.*', '!app/*.html'], {dot: true})
        .pipe(gulp.dest(config.distRoot));
});
