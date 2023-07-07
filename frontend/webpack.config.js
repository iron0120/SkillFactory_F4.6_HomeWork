const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.m?js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            }
        ]
    },

    devServer: {
        static: "./dist",
        hot: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}