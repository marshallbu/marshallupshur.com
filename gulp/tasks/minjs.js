var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('minjs', ['browserify', 'browserify:libs'], function() {
    return gulp.src(config.dist.dir.scripts + '*.js')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(config.dist.dir.scripts));
});
