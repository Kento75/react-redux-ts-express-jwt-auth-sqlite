
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: 'node',
  entry: './src/index.tsx',
  cache: true,
  mode: 'development',  // "production" | "development" | "none"
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader'
    }, {
      test: /\.tsx?$/,
      enforce: 'pre',
      loader: 'tslint-loader',
      options: {
        configFile: './tslint.json',
        typeCheck: true,  // AirBnB 準拠
      },
    },{
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
    }],
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
    ]
  },
  serve: {
    open: true,
    port: 8080,
    content: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })]
};