const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: './src/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        contentBase: './public',
        hot: true,
        port: 9000,
        open: true,
        historyApiFallback: true,
        allowedHosts: [
            'localhost',
            'dev.pushkereva.art'
        ],
    },
    devtool: 'inline-source-map'
});