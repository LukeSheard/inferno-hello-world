const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server')
const glob = require('glob');

const config = {
    target: 'web',
    devtool: 'source-map',
	entry: {
        bundle: './src/index.js'
    },
    node: {
        global: true,
        fs: 'empty'
    },
	output: {
        sourcePrefix: '',
		publicPath: 'http://localhost:8080/',
        libraryTarget: 'var',
        path: path.join(__dirname, 'build'),
        pathinfo: true
	},
	//devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: path.join(__dirname, 'src')
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
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
	]
};

const compiler = webpack(config)
const port = 8080

new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': 'SourceMap,X-SourceMap'
    },
    hot: true,
    historyApiFallback: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: false
    },
    proxy: {
        '/': {
            bypass: function (req, res, proxyOptions) {
                return '/public/index.html';
            }
        }
    },
    stats: {
        colors: true,
        hash: false,
        timings: false,
        version: false,
        chunks: false,
        modules: false,
        children: false,
        chunkModules: false
    }
}).listen(port, 'localhost', function (err, result) {
    if (err) return console.log('webpack:error', err);

    console.log('Running on port ' + port)
})
