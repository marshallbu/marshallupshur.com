var webpack = require('webpack');
var isProduction = process.env.NODE_ENV === 'production';
var path = require('path');
var config = require('./gulp_tasks/utils/config.js');

module.exports = {
    debug: true,
    devtool: '#source-map',
    entry: {
        app: config.src.file.app,
        libs: config.src.file.lib,
    },
    output: {
        path: path.join(__dirname, config.distRoot),
        publicPath: config.distRoot,
        filename: config.dist.file.bundle,
        chunkFilename: '[chunkhash].js'
    },
    module: {
        preLoaders: [
            { test: /\.(js|jsx)$/, loader: 'source-map-loader' }
        ],
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'}
            ]
        },
        resolve: {
            modulesDirectories: ['app/scripts', 'node_modules', 'bower_modules'],
            // packageAlias: false,
            alias: {
            }
        },
        externals: [
        ],
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('libs', config.dist.file.libs),
            new webpack.DefinePlugin({
                PRODUCTION: !!isProduction
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new webpack.optimize.DedupePlugin()

        ]
    };
