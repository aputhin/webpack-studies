var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'react-redux', 'react-dom', 'react-router', 'react-input-range',
  'redux', 'redux-form', 'redux-thunk', 'faker', 'lodash'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    // name pairs up with the above entries
    // chunkhash helps the browser keeps track of what files changed
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    // removes the duplicate (commonly used) dependencies
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    // adds the bundle script tags into the html file
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
