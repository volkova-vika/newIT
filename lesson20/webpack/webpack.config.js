const path = require('path');

module.exports = {
    entry: './scr/index.html',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.[contenthash].js'
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: ['@babel/preset-env']
    //                 }
    //             }
    //         }
    //     ]
    // },
    // devServer: {
    //     contentBase: './dist',
    //     port: 3000,
    //     hot: true
    // }
}