var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./../utils/config');

gulp.task('prerender', function() {

    return gulp.src(config.src.dir.scripts + 'app.jsx')
        .pipe(plugins.renderReact())
        .pipe(gulp.dest(config.tmp.dir.componentPartials));
});
