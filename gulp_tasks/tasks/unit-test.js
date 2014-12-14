var gulp = require('gulp'),
    sequence = require('run-sequence'),
    config = require('./../utils/config');

gulp.task('unit-test', function (cb) {
  // TODO: we all know this isn't a unit test
  sequence(
    ['lint'],
    cb
  );
});
