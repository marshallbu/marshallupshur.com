var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config'),
    pngcrush = require('imagemin-pngcrush');

gulp.task('images', function() {
    return gulp
        .src(config.src.glob.images)
        .pipe(plugins.changed(config.build.dir.images))
        // .pipe(plugins.imagemin({
        //     progressive: true,
        //     svgoPlugins: [{removeViewBox: false}],
        //     use: [pngcrush()]
        // }))
        .pipe(gulp.dest(config.build.dir.images));
});