const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const DIST = path.join(__dirname, '../docs');
const SOURCE = path.join(__dirname, "../src");

module.exports = {
  entry: {
    app: SOURCE
  },
  output: {
    path: DIST,
    publicPath: '',
    filename: 'js/[name].bundle.[hash].js'
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
    },{
      test: /\.(png|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 1000,
        name: '[name].[ext]',
        fallback: 'file-loader',
        outputPath: '/img',
        publicPath: '../img'
      }
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: 'url-loader',
      options: {
        limit: 1000,
        name: '[name].[ext]',
      }
    },{
      test: /\.s?css$/,
      use: [
        'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
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
      filename: path.join("css", "[name].[hash].css"),
    }),
    new HtmlWebpackPlugin({
      filename: path.join(DIST, "index.html"),
      template: 'src/index.ejs',
      favicon: path.join(SOURCE, "static", "favicon.png"),
      productionMode: false
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
