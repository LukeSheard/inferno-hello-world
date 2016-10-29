const webpack = require('webpack');
const glob = require('glob');

module.exports = {
	entry: {
        bundle: './src/index.js'
    },
	output: {
		publicPath: 'http://localhost:8080/'
	},
	//devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [
			'',
			'.js',
			'.jsx'
		]
	},
	devServer: {
		contentBase: './',
		port: 8080,
		noInfo: true,
		hot: true,
		inline: true,
		proxy: {
			'/': {
				bypass: function (req, res, proxyOptions) {
					return '/public/index.html';
				}
			}
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
