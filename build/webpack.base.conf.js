const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const DIST = path.join(__dirname, '../dist');
const SOURCE = path.join(__dirname, "../src");

module.exports = {
  // BASE config
  entry: {
    app: SOURCE,
    module: path.join(SOURCE, "index.js"),
  },
  output: {
    filename: "[name].[hash].js",
    path: path.join(DIST, "js"),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/, loader: 'url-loader?limit=100000',
      loader: 'url-loader?limit=100000',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // publicPath: '../',
            hmr: process.env.NODE_ENV === 'development'
          }
        },
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join("../", "css", "[name].[hash].css"),
    }),
    new CopyWebpackPlugin([
      { from: path.join(SOURCE, "assets", "img"), to: path.join(DIST, "img") },
      { from: path.join(SOURCE, "assets", "fonts"), to: path.join(DIST, "fonts") },
      { from: path.join(SOURCE, "static"), to: DIST },
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
}
