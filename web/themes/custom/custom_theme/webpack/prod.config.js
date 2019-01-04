const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
