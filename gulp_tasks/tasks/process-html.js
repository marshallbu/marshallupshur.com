var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var log = require('./../utils/log');
var pkgjson = require('./../../package.json');
var moment = require('moment');
var config = require('./../utils/config');
var fs = require('fs');
var onlyImages = require('./../utils/imageFilter');

gulp.task('process-html', ['partial-compile', 'prerender'], function() {
    var dir = config.src.dir.images + 'port/';
    var data = {
        version: pkgjson.version,
        copyYear: moment().format('YYYY'),
        creations: fs.readdirSync(dir)
            .filter(onlyImages)
            .sort(function(a, b) { return a > b ? -1 : 1; })
            .map(function(name) {
                return {
                    type: 'img',
                    path: 'images/port/' + name
                };
            }),
        boxResumeUrl: config.dist.file.boxResumeUrl,
        resumeUrl: config.dist.file.resume
    };

    return gulp
        .src(config.src.glob.html)
        .pipe(plugins.preprocess({
            context: {
                '__DATA__': '<script>var __DATA__ = ' + JSON.stringify(data) + '</script>',
                'APP_VERSION': pkgjson.version,
                'OG_URL': process.env.NODE_ENV === 'production' ? 'www' : 'dev100',
                'TARGET': process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
                DEBUG: true
            }
        }))
        .pipe(gulp.dest(config.dist.dir.root));
});
