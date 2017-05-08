var webpack = require('webpack');
var isProduction = process.env.NODE_ENV === 'production';
var path = require('path');
var config = require('./gulp_tasks/utils/config.js');

module.exports = {
    // debug: true,
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
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    // https://github.com/babel/babel-loader#options
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    resolve: {
        modules: [
            'app/scripts',
            'node_modules'
        ],
        // packageAlias: false,
        alias: {
            // react: isProduction ? 'react/dist/react.min' : 'react',
            // react: 'react',
            // 'react-dom': isProduction ? 'react-dom/dist/react-dom.min' : 'react-dom',
            // 'react-dom': 'react-dom',
            // 'react-bootstrap': isProduction ? 'react-bootstrap/dist/react-bootstrap.min' : 'react-bootstrap',
            moment: 'moment/min/moment.min.js'
        }
    },
    externals: [
    ],
    plugins: [
        // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/)
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.CommonsChunkPlugin({ name: 'libs', filename: config.dist.file.libs }),
        new webpack.DefinePlugin({
            PRODUCTION: !!isProduction
        }),
        new webpack.ProvidePlugin({
            // $: 'jquery',
            // jQuery: 'jquery'
        }),
        new webpack.optimize.DedupePlugin()

    ]
};
