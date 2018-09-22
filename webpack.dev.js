const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');


module.exports = merge(common, {
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
});