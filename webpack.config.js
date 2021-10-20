const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

let plugins = [
    new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
    }),
    new WebpackShellPluginNext({
        onBuildStart: {
            scripts: ['echo "Webpack Start"'],
            blocking: true,
            parallel: false
        },
        onBuildEnd: {
            scripts: ['echo "Webpack End"'],
            blocking: false,
            parallel: true
        }
    })
]

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: plugins,
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }
        ]
    }
}