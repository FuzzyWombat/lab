const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const { join } = require('path');

//3 values besides the expose{} have been removed, find and replace the 3 values to get module federation working

module.exports = {
    output: {
        path: join(__dirname, '../../dist/apps/salt-nested-route'),
        scriptType: 'text/javascript',
        uniqueName: 'Salt',
    },
    devServer: {
        port: 'auto',
        historyApiFallback: {
            index: '/index.html',
            disableDotRule: true,
            htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
        },
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'Salt',
            filename: 'remoteEntry.js',
            exposes: {},
        }),
        new NxAppWebpackPlugin({
            tsConfig: './tsconfig.app.json',
            compiler: 'babel',
            main: './src/main.tsx',
            index: './src/index.html',
            baseHref: '/',
            assets: [],
            styles: [],
            outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
            optimization: process.env['NODE_ENV'] === 'production',
        }),
        new NxReactWebpackPlugin({}),
    ],
};
