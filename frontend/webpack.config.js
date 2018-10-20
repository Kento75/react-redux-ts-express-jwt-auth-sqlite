const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = (env, argv) => {
  const mode = process.env.NODE_ENV || "development";
  const isProduction = mode === "production";

  return {
    mode: mode,
    entry: {
      main: [
        path.resolve(__dirname, "src/index.tsx")
      ]
    },
    output: {
//      filename: isProduction ? "bundle.[chunkhash].js" : "[name].js",
      filename: "[name].js",
      path: path.resolve(__dirname, "dist")
    },
    devtool: isProduction ? false : "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss", ".jpg", ".jpeg", ".gif", ".png", ".bmp", ".tiff", "woff", "eot", "ttf", ".svg", ".ico"]
    },
    optimization: {
      splitChunks: {
        name: "vendor",
        chunks: "initial",
      }
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  importLoaders: 2,
                  modules: true,
//                  localIdentName: "[name]-[local]-[hash:base64:5]",
                  localIdentName: "[name]-[local]",
                  sourceMap: !isProduction,
                  minimize: isProduction
                }
              },
              {
                loader: "typed-css-modules-loader",
                options: {
                  camelCase: true,
                  searchDir: "./src",
                  outDir: "./typings"
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  sourceMap: !isProduction,
                  plugins: [
                    autoprefixer()
                  ]
                }
              }, {
                loader: "sass-loader"
              }
            ]
          })
        }, {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        }, {
          test: /\.(png|jpe?g|gif|bmp|tiff|woff|woff2|eot|ttf|svg|ico)$/,
          use: [{
            loader: "url-loader",
            options: {
              limit: 200000,
//              name: isProduction ? "[name]-[hash].[ext]" : "[name].[ext]"
              name: "[name].[ext]"
            }
          }]
        }
      ]
    },
    serve: {
      content: path.resolve(__dirname, 'dist'),
      port: 3000,
      add: (app, middleware, options) => {
        app.use(convert(history({ index: '/' })));
      },
    },
    plugins: [
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
      }),
      new ExtractTextPlugin({
//        filename: isProduction ? "bundle.[chunkhash].css" : "[name].css",
        filename: "[name].css",
        allChunks: true
      }),
    ]
  }
}
