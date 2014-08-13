var gulp = require('gulp'),
    isProduction = process.env.NODE_ENV === 'production',
    plugins = require('gulp-load-plugins')(),
    webpack = require('webpack'),
    webpackConfig = require("./../../webpack.config.js");
    config = require('./../utils/config');

gulp.task("webpack:build", function(callback) {
    var myConfig = Object.create(webpackConfig);
    var webpackCallback = function(err, stats) {
        if(err) throw new plugins.util.PluginError("webpack:build", err);
        plugins.util.log("[webpack:build]", stats.toString({
            colors: true
        }));
        // callback();
    };

    if (isProduction) {
        myConfig.plugins = myConfig.plugins.concat(
            new webpack.optimize.UglifyJsPlugin({
                // mangle: false
            })
            // new webpack.optimize.OccurenceOrderPlugin()
        );
    }

    return gulp.src(config.src.file.app)
        .pipe(plugins.webpack(myConfig, null, webpackCallback))
        .pipe(gulp.dest(config.dist.dir.scripts));

    // webpack(myConfig, webpackCallback);
});
