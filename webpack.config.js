// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './public/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: 'public/kodkaland/index.html',
            filename: 'kodkaland/index.html',
        }),
        new HtmlWebpackPlugin({
            template: 'public/en.html',
            filename: 'en.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'content', to: 'content' }
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                require('tailwindcss'),
                                require('autoprefixer'),
                            ],
                        },
                    },
                },
                ],
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
