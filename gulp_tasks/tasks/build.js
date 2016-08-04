var gulp = require('gulp');
var sequence = require('run-sequence');

gulp.task('build', ['prep-build'], function (callback) {
    sequence(
        ['images', 'fonts', 'extras', 'lint'],
        ['webpack:build'],
        ['minhtml', 'mincss'],
        callback
    );
});
