const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3002,
    historyApiFallback: true
  },
  webpack: {
    configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
            path: false,
        }

        webpackConfig.optimization = {
            runtimeChunk: false,
            splitChunks: false
        }

        webpackConfig.output = {
            publicPath: 'auto',
            scriptType: 'text/javascript'
        }

        return webpackConfig
        
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "fatboy",
          filename: "remoteEntry.js",
          library: { type: 'var', name: 'fatboy' },
          exposes: {
            "./Test": "./src/components/Test",
          },
          shared: {},
        }),
      ],
    },
  },
};
