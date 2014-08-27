var gutil = require('gulp-util');

module.exports = {
    info: gutil.log.bind(undefined, '[INFO]'),
    warn: gutil.log.bind(undefined, gutil.colors.yellow('[WARN]')),
    error: gutil.log.bind(undefined, gutil.colors.red('[ERROR]')),
    debug: gutil.log.bind(undefined, gutil.colors.cyan('[DEBUG]'))
};