var fs = require('fs'),
    gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    onlyScripts = require('./utils/scriptFilter');

var tasks = fs.readdirSync(__dirname + '/tasks/').filter(onlyScripts);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});

/**
 * gulp help - show available gulp commands
 */
gulp.task('help', plugins.taskListing);
