var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    fs = require('fs'),
    onlyImages = require('./../utils/imageFilter'),
    config = require('./../utils/config');

gulp.task('partial-compile', function(callback) {
    var data = {};
    var dir = config.src.dir.images + 'port/';
    var creationPaths = fs.readdirSync(dir)
        .filter(onlyImages)
        .sort(function(a, b) { return a > b ? -1 : 1; })
        .map(function(name) { return 'images/port/' + name; });

    gulp.src(config.src.dir.partials + 'analytics.html')
        .pipe(plugins.template({
        }))
        .pipe(gulp.dest(config.dist.dir.partials));

    gulp.src(config.src.dir.partials + 'creations_slider.html')
        .pipe(plugins.template({
            creations: creationPaths
        }))
        .pipe(gulp.dest(config.dist.dir.partials));

    gulp.src(config.src.dir.partials + 'contact_modal_template.html')
        .pipe(plugins.template({
        }))
        .pipe(gulp.dest(config.dist.dir.partials));

    return gulp.src(config.src.dir.partials + 'resume_template.html')
        .pipe(plugins.template({
            downloadUrl: config.dist.file.resume
        }))
        .pipe(gulp.dest(config.dist.dir.partials));

});
