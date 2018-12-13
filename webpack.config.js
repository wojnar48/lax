const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './frontend/lax_entry.jsx',
  output: {
    filename: './app/assets/javascripts/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['transform-object-rest-spread']
          }
        },
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
};
  