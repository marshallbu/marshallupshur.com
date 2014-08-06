var gulp = require('gulp'),
    isProduction = process.env.NODE_ENV === 'production',
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('minjs', ['browserify', 'browserify:libs'], function() {
    return gulp.src(config.dist.dir.scripts + '*.js')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.if(isProduction,plugins.uglify()))
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(config.dist.dir.scripts));
});
