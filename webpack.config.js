const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = function(_env, argv) {
    const isProduction = argv.mode === "production";
    const isDevelopment = !isProduction;

    return {
        target: 'node',
        devtool: isDevelopment && "inline-source-map", 
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: "[name].js",
            publicPath: '/'
        },
        plugins: [new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })],
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    use: [isProduction ? MiniCssExtractPlugin.loader : 
                        'style-loader', 'css-loader', {
                            loader: "sass-loader",
                            options: {
                            implementation: require("sass"),
                            },
                        }]
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
        }
    }
};