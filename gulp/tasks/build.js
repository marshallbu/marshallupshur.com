var gulp = require('gulp'),
    sequence = require('run-sequence');

gulp.task('build', ['prep-build'], function (callback) {
    sequence('bower', 'html', 'template-include', 'images', 'fonts', 'less', 'browserify', 'extras', callback);
});