var gulp = require('gulp'),
    isProduction = process.env.NODE_ENV === 'production',
    plugins = require('gulp-load-plugins')(),
    webpackStream = require('webpack-stream'),
    webpack = require('webpack'),
    webpackConfig = require('./../../webpack.config.js'),
    config = require('./../utils/config');

gulp.task('webpack:build', function(callback) {
    var webpackCallback = function(err, stats) {
        if(err) {
            throw new plugins.util.PluginError('webpack:build', err);
        }
        plugins.util.log('[webpack:build]', stats.toString({
            colors: true
        }));
    };

    if (isProduction) {
        webpackConfig.plugins = webpackConfig.plugins.concat(
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                // http://lisperator.net/uglifyjs/compress
                compress: {
                    warnings: false
                },
                mangle: true,
                exclude: [
                ]
            }),
            new webpack.optimize.OccurenceOrderPlugin()
        );
    }

    return gulp.src(config.src.file.app)
        .pipe(webpackStream(webpackConfig, webpack, webpackCallback))
        .pipe(gulp.dest(config.dist.dir.scripts));
});
