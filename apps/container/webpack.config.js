const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { join } = require('path');

module.exports = {
    output: {
        path: join(__dirname, '../../dist/apps/container'),
    },
    devServer: {
        port: 4200,
        historyApiFallback: {
            index: '/index.html',
            disableDotRule: true,
            htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
        },
        client: {
            overlay: false,
        },
    },
    plugins: [
        new NxAppWebpackPlugin({
            tsConfig: './tsconfig.app.json',
            compiler: 'babel',
            main: './src/index.ts',
            index: './src/index.html',
            baseHref: '/',
            assets: [],
            styles: [],
            outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
            optimization: process.env['NODE_ENV'] === 'production',
        }),
        new NxReactWebpackPlugin(),
    ],
};
