var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    fs = require('fs'),
    argv = require('yargs').argv,
    config = require('./../utils/config');

var path;
var file = './.deploypaths';
if (fs.existsSync(file)) {
  path = JSON.parse(fs.readFileSync(file,'utf8')).path;
}

gulp.task('deploy', function () {
    return gulp.src(config.distRoot + '**/*')
        .pipe(plugins.sftp({
            host: 'mbucreations.com',
            auth: 'privateKeyEncrypted',
            remotePath: path[argv.target]
        }));
});
