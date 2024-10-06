import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack'

export default defineConfig({
  server: {
    port: 3001,
  },
  tools: {
    rspack: {
      optimization: {runtimeChunk: false},
      output: {
        publicPath: 'auto'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'Quotes',
          filename: 'remoteEntry.js',
          exposes: {
            "./QuotesApp": "./src/remote.ts",
          }
        }),
      ],
    },
  },
  plugins: [pluginVue()],
});
