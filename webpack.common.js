const package = require('./package.json')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.css$/i,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    "postcss-preset-env",
                                    {
                                        // Options
                                    },
                                ],
                            ],
                        },
                    },
                },
            ],
        }, ],
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