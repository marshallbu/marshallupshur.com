var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pkgjson = require('./../../package.json');
var moment = require('moment');
var config = require('./../utils/config');

gulp.task('prerender', function() {
    return gulp.src(config.src.dir.scripts + 'app.jsx')
        .pipe(plugins.renderReact())
        .pipe(plugins.preprocess({
            context: {
                'APP_VERSION': pkgjson.version,
                'COPY_YEAR': moment().format('YYYY'),
                DEBUG: true
            }
        }))
        .pipe(gulp.dest(config.tmp.dir.componentPartials));
});
