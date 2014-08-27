var gulp = require('gulp'),
    isProduction = process.env.NODE_ENV === 'production',
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('mincss', ['less'], function() {
    return gulp.src(config.dist.dir.styles + '*.css')
        .pipe(plugins.if(isProduction, plugins.minifyCss()))
        .pipe(gulp.dest(config.dist.dir.styles));
});
