const path = require('path')

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};