const webpack = require('webpack');
const path = require('path');
const environment = require('./build/environment');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

function dll() {
    const dll = ['vue', 'ui', 'common']
    return dll.map(d => {
        return new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(`./public/dll/${d}-manifest.json`),
        })
    })
}

module.exports = {
    configureWebpack: {
        entry: {
            vendor: [
                "lodash"
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.VUE_APP_MOCK': JSON.stringify(environment.mock),
                'process.env.VUE_APP_BASE_API': JSON.stringify(environment.baseUrl)
            }),
            new webpack.ProvidePlugin({
                _: 'lodash',
            }),
            // 不再对dll进行编译
            ...dll(),
            // 将 dll 注入到 生成的 html 模板中
            new AddAssetHtmlPlugin({
                filepath: path.resolve(__dirname, './public/dll/*.js'),
                publicPath: '/dll',
                outputPath: './dll'
            })
        ]
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, 'src/assets/css/variable.less')
            ]
        }
    },
    transpileDependencies: [
        'vuex-module-decorators'
    ],
};
