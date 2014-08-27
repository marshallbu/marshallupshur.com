var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('bump', function () {
    return gulp
        .src(config.src.glob.projectJSON)
        .pipe(plugins.bump({type:'patch'}))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:minor', function () {
    return gulp
        .src(config.src.glob.projectJSON)
        .pipe(plugins.bump({type:'minor'}))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:major', function () {
    return gulp
        .src(config.src.glob.projectJSON)
        .pipe(plugins.bump({type:'major'}))
        .pipe(gulp.dest('./'));
});
