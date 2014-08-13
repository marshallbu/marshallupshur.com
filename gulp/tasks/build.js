var gulp = require('gulp'),
    sequence = require('run-sequence');

gulp.task('build', ['prep-build'], function (callback) {
    sequence('bower', 'images', 'fonts', 'minhtml', 'mincss', 'lint', 'webpack:build', 'extras', callback);
});
