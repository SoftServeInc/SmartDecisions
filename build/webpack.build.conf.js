const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST = path.join(__dirname, '../docs');
const SOURCE = path.join(__dirname, "../src");

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(DIST, "index.html"),
      template: path.join(SOURCE, "index.ejs"),
      favicon: path.join(SOURCE, "static", "favicon.png"),
      productionMode: true
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
