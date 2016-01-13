import fs from 'fs';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import onlyScripts from './utils/scriptFilter';
import gulpHelp from 'gulp-help';

gulpHelp(gulp);

const plugins = gulpLoadPlugins();
const tasks = fs.readdirSync(__dirname + '/tasks/').filter(onlyScripts);

tasks.forEach(task => require(`./tasks/${task}`));

/**
 * gulp help - show available gulp commands
 */
gulp.task('help', plugins.taskListing);
