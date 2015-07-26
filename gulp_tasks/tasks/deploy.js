var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var fs = require('fs');
var argv = require('yargs').argv;
var config = require('./../utils/config');

var path;
var file = './.deploypaths';
if (fs.existsSync(file)) {
    path = JSON.parse(fs.readFileSync(file, 'utf8')).path;
}

gulp.task('deploy', function () {
    return gulp.src(config.distRoot + '**/*', {dot: true})
        .pipe(plugins.sftp({
            host: 'mbucreations.com',
            auth: 'privateKeyEncrypted',
            remotePath: path[argv.target]
        }));
});
