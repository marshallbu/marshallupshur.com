var gulp = require('gulp'),
    sequence = require('run-sequence');

gulp.task('build', ['prep-build'], function (callback) {
    sequence('bower', 'compile-html', 'images', 'fonts', 'less', 'browserify', 'extras', callback);
});