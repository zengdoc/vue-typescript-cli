switch (process.env.npm_package_config_environment) {
    case 'dev':
        process.env.VUE_APP_BASE_API = 'dev';
        break;
    case 'sit':
        process.env.VUE_APP_BASE_API = 'sit';
        break;
}

const webpack = require('webpack');

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
    }
}
