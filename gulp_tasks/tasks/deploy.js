var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config');

gulp.task('deploy:development', function () {
    return gulp.src(config.distRoot + '**/*')
        .pipe(plugins.sftp({
            host: 'mbucreations.com',
            auth: 'privateKeyEncrypted',
            remotePath: 'domains/dev100.marshallupshur.com/html/'
        }));
});
