// basic vars
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const browserConfig = {
    mode: 'development',
    devtool: '#@cheap-module-eval-source-map',
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            url: false,
                            hmr: true,
                            reloadAll: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/,
                exclude: /node_modules/,
                loaders: ['url-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                use: ['url-loader'],
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        }),
        new webpack.SourceMapDevToolPlugin({filename: '[file].map'}),
        new MiniCssExtractPlugin()
    ]
};

const serverConfig = {
    mode: 'development',
    devtool: '#@cheap-module-eval-source-map',
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: 'server.js',
        publicPath: '/',
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },

                ],
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/,
                exclude: /node_modules/,
                loaders: ['url-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                use: ['url-loader']
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        }),
        new webpack.SourceMapDevToolPlugin({filename: '[file].map'}),
        new MiniCssExtractPlugin()
    ]
};

module.exports = [browserConfig, serverConfig];