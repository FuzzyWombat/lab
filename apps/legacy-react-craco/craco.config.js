const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');

module.exports = {
    devServer: {
        port: 3002,
        historyApiFallback: true,
    },
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.resolve.fallback = {
                path: false,
            };
            webpackConfig.output = {
                publicPath: 'auto',
                scriptType: 'text/javascript',
            };
            return webpackConfig;
        },
        optimization: {
            runtimeChunk: false,
            splitChunks: false,
        },
        plugins: {
            add: [
                new ModuleFederationPlugin({
                    name: 'Legacy',
                    filename: 'remoteEntry.js',
                    exposes: {
                        './Legacy': './src/components/Legacy',
                    },
                }),
            ],
        },
    },
};
