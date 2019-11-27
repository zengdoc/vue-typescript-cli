switch (process.env.npm_package_config_environment) {
    case 'dev':
        process.env.VUE_APP_BASE_API = 'dev';
        process.env.VUE_APP_MOCK = process.env.npm_package_config_mock === '1';
        break;
    case 'sit':
        process.env.VUE_APP_BASE_API = 'sit';
        process.env.VUE_APP_MOCK = process.env.npm_package_config_mock === '1';
        break;
}

const webpack = require('webpack');
const path = require('path');

module.exports = {
    configureWebpack: {
        entry: {
            vendor: [
                "lodash"
            ],
        },
        plugins: [
            new webpack.ProvidePlugin({
                _: 'lodash',
            })
        ]
    },

    pluginOptions: {
      'style-resources-loader': {
          preProcessor: 'less',
          patterns: [path.resolve(__dirname, 'src/assets/css/index.less')]
      }
    }
}
