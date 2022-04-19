const webpack = require('webpack');
const path = require('path');
const environment = require('./build/environment');
const month = 30 * 24 * 60 * 60
const VersionManagePlugin = require('version-manage-webpack-plugin')

const getPlugins = originPlugins => {
    let newPlugins = originPlugins
    newPlugins.push(...[
        new webpack.DefinePlugin({
            'process.env.VUE_APP_MOCK': JSON.stringify(environment.mock),
            'process.env.VUE_APP_BASE_API': JSON.stringify(environment.baseUrl)
        }),
        new webpack.ProvidePlugin({
            _: 'lodash',
        }),
    ])
   if (process.env.NODE_ENV === 'production') {
        // add
        newPlugins.push(...[
            new VersionManagePlugin({
                maxAge: month,
                log: true,
            })
        ])
    }
    return newPlugins
}

module.exports = {
    publicPath: "",
    configureWebpack: config => {
        config.entry.vendor = [
            "lodash"
        ]
        config.plugins = getPlugins(config.plugins)
    },
    chainWebpack: config => {
        config.module.noParse(/^(vue|vue-router|vuex|vuex-router-sync|lodash|element-ui|axios)$/);
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
