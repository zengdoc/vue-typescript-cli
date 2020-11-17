const webpack = require('webpack');
const path = require('path');
const environment = require('./build/environment');

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
        ]
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
