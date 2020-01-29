const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	mode: 'development',
	entry: [
		'webpack-dev-server/client',
		'webpack/hot/only-dev-server',
		resolve(__dirname, 'hotReload'),
	],
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname),
		publicPath: '/',
	},
	resolve: {
		modules: [resolve(__dirname, '../app'), 'node_modules'],
	},
	context: resolve(__dirname, '../app'),
	devtool: '#eval',
	devServer: {
		hot: true,
		host: '0.0.0.0',
		contentBase: resolve(__dirname, '../assets'),
		publicPath: '/',
		historyApiFallback: true,
		stats: {
			colors: true,
			hash: false,
			assets: false,
			children: false,
			timings: true,
			chunks: false,
			chunkModules: false,
			modules: false,
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: [resolve(__dirname, '../app'), resolve(__dirname)],
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { hmr: true },
					},
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: { ident: 'postcss', plugins: [autoprefixer({})] },
					},
					{ loader: 'resolve-url-loader' },
					{
						loader: 'sass-loader',
						options: {
							// sourceMap: true,
							// sourceMapContents: false,
							sassOptions: {
								includePaths: [resolve(__dirname, '../')],
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			title: 'hmr-title',
			template: '../webpack/template.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new CopyWebpackPlugin([{ from: '../static' }]),
	],
	performance: { hints: false },
};
