var gulp = require('gulp'),
    isProduction = process.env.NODE_ENV === 'production',
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('minhtml', ['compile-html'], function() {
    var opts = {comments:true,spare:true};

    return gulp.src(config.distRoot + '*.html')
        // .pipe(plugins.if(isProduction, plugins.minifyHtml(opts)))
        .pipe(gulp.dest(config.distRoot));
});
