var gulp = require('gulp'),
    isProduction = process.env.NODE_ENV === 'production',
    plugins = require('gulp-load-plugins')(),
    config = require('./../utils/config'),
    pngcrush = require('imagemin-pngcrush');

gulp.task('images', function() {
    return gulp
        .src(config.src.glob.images)
        .pipe(plugins.changed(config.dist.dir.images))
        .pipe(plugins.if(isProduction, plugins.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        })))
        .pipe(gulp.dest(config.dist.dir.images));
});
