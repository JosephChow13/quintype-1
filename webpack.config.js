const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './main.js',
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader']
    }, {
      test: /\.(css|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }]
  },
  devServer: {
    contentBase: __dirname + '/public',
  }
};

