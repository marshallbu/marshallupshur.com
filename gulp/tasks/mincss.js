var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('mincss', ['less'], function() {
    return gulp.src(config.dist.dir.styles + '*.css')
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest(config.dist.dir.styles));
});
