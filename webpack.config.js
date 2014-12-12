var webpack = require('webpack'),
    isProduction = process.env.NODE_ENV === 'production',
    path = require("path"),
    config = require('./gulp_tasks/utils/config.js');

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
            { test: /\.js$/, loader: "source-map" }
        ],
		loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /[\/]angular\.js$/, loader: 'exports?angular' },
            { test: /[\/]angular\.min\.js$/, loader: 'exports?angular' },
        ]
    },
    resolve: {
        modulesDirectories: ['app/scripts', 'node_modules', 'bower_modules'],
        // packageAlias: false,
        alias: {
			      jquery: 'jquery/dist/jquery.min',
            lodash: 'lodash/dist/lodash.min',
            bootstrap: 'bootstrap/dist/js/bootstrap.min',
            angular: 'angular/angular.min',
            angularResource: 'angular-resource/angular-resource.min',
            angularRoute: 'angular-route/angular-route.min',
            angularSanitize: 'angular-sanitize/angular-sanitize.min',
            viewer: "viewer/dist/crocodoc.viewer"
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
			      jQuery: 'jquery',
		    }),
        new webpack.optimize.DedupePlugin()

	]
};
