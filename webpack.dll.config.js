const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// dll文件存放的目录
const dllPath = 'public/dll'

module.exports = {
    entry: {
        vue: [
            'vue',
            'vue-router',
            'vuex',
        ],
        ui: [
            'element-ui',
        ],
        common: [
            'axios',
            'lodash',
        ]

    },
    output: {
        path: path.join(__dirname, dllPath),
        filename: '[name].dll.js',
        library: '[name]_[hash]',
    },
    plugins: [
        new CleanWebpackPlugin(['*.*'], {
            root: path.join(__dirname, dllPath)
        }),
        new webpack.DllPlugin({
            path: path.join(__dirname, dllPath, '[name]-manifest.json'),
            name: '[name]_[hash]',
        }),
    ]
}
