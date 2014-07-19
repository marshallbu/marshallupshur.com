var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    log = require('./../utils/log'),
    config = require('./../utils/config');

gulp.task('html', function() {
    return gulp
        .src(config.src.glob.html)
        .pipe(plugins.preprocess({
            context: { 
                'TARGET': process.env.NODE_ENV ? process.env.NODE_ENV : 'development', 
                DEBUG: true
            }
            })
        )
        .pipe(gulp.dest(config.build.dir.root));
});