const { resolve } = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const staticPaths = require('./staticPaths');


module.exports = {
	mode: 'production',
	entry: {
		main: resolve(__dirname, '../app/indexProd.js'),
	},
	resolve: {
		modules: [resolve(__dirname, '../app'), 'node_modules']
	},
	output: {
		filename: 'main.js',
		path: resolve(__dirname, '../dist'),
		publicPath: '/',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: [resolve(__dirname, '../app')],
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: { ident: 'postcss', plugins: [autoprefixer({})] },
					},
					{ loader: 'resolve-url-loader' },
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [resolve(__dirname, '../')],
							}
						},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new StaticSiteGeneratorPlugin({
			paths: staticPaths,
			globals: {
				window: {},
			},
		})
	],
};
