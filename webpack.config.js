const webpack = require('webpack');
const path = require('path');
module.exports = {
  context: __dirname + '/src',
  entry: './client/index.js',
  devtool: 'eval-source-map',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/],
        query: {
          presets: ['es2015']

        }
      }, {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
};
