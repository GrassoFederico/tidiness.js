const package = require('./package.json')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: package.name,
            template: './src/index.html'
        }),
    ],
    output: {
        filename: 'colorize.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};