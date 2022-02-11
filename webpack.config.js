'use strict'
const path = require('path');

module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: [{ loader: 'babel-loader' }],
            include: [path.resolve(__dirname, 'src')],
        }]
    },
    plugins: [],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        host: 'localhost',
        port: 8080,
    },
    // devServer: {
    //     contentBase: './public',
    //     contentBase: path.join(__dirname, 'public'),
    //     host: 'localhost',
    //     port: 8080
    // }
}
