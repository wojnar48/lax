const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './frontend/lax_entry.jsx',
  output: {
    path: path.resolve(__dirname, 'app/assets/javascripts'),
    filename: 'bundle.js',
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
      },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '*']
  },
};
  