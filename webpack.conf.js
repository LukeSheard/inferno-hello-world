const webpack = require('webpack');
const glob = require('glob');

module.exports = {
	entry: './src/index.js',
	output: {
		path: '.',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	//devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules\/dist/
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
