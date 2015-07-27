var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var log = require('./../utils/log');
var pkgjson = require('./../../package.json');
var moment = require('moment');
var config = require('./../utils/config');
var fs = require('fs');
var onlyImages = require('./../utils/imageFilter');

gulp.task('process-html', ['partial-compile', 'prerender'], function() {
    var data = {};
    var dir = config.src.dir.images + 'port/';

    data.creations = fs.readdirSync(dir)
        .filter(onlyImages)
        .sort(function(a, b) { return a > b ? -1 : 1; })
        .map(function(name) {
            return {
                type: 'img',
                path: 'images/port/' + name
            };
        });

    return gulp
        .src(config.src.glob.html)
        .pipe(plugins.preprocess({
            context: {
                '__DATA__': '<script>var __DATA__ = ' + JSON.stringify(data) + '</script>',
                'COPY_YEAR': moment().format('YYYY'),
                'APP_VERSION': pkgjson.version,
                'TARGET': process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
                'OG_URL': process.env.NODE_ENV === 'production' ? 'www' : 'dev100',
                DEBUG: true
            }
        }))
        .pipe(gulp.dest(config.dist.dir.root));
});
