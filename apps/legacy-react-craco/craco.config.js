const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devServer: {
    port: 3002,
    historyApiFallback: true
  },
  webpack: {
    configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
            path: false
        }

        webpackConfig.output = {
            scriptType: 'text/javascript',
            publicPath: 'auto'
        }

        return webpackConfig
        
    },
    optimization: {
        runtimeChunk: false
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "Legacy",
          filename: "remoteEntry.js",
          exposes: {
            "./Test": "./src/components/Test",
          },
          shared: {
            react: { eager:true, import: 'react', singleton: true },
            "react-dom": { eager:true, import: 'react-dom', singleton: true },
          },
        }),
      ],
    },
  },
};
export {}