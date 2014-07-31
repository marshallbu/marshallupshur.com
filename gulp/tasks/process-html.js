var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    log = require('./../utils/log'),
    pkgjson = require('./../../package.json'),
    moment = require('moment'),
    config = require('./../utils/config');

gulp.task('process-html', ['partial-compile'], function() {
    return gulp
        .src(config.src.glob.html)
        .pipe(plugins.preprocess({
            context: {
                'COPY_YEAR': moment().format('YYYY'),
                'APP_VERSION': pkgjson.version,
                'TARGET': process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
                DEBUG: true
            }
            })
        )
        .pipe(gulp.dest(config.dist.dir.root));
});
