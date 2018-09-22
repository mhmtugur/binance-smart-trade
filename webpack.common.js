const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },{
      test: /\.(pdf|jpg|png|gif|svg|ico)$/,
      use: [
          {
              loader: 'url-loader'
          }
      ]
  }]
  }/*,
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]*/
};
