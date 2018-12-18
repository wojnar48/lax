const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = (env) => {
  const plugins = [
    new webpack.DefinePlugin({
      PUSHER_KEY: JSON.stringify(process.env.PUSHER_KEY),
    }),
  ];

  // Only include the bundle analyzer if we are not running in production
  if (!env.prod) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
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
              presets: [
                'react',
                [
                  "env",
                  {
                    "targets": {
                      "browsers": ["last 2 versions"]
                    }
                  }
                ]
              ],
              plugins: [
                'transform-object-rest-spread',
                'transform-runtime',
                'transform-class-properties'
              ]
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
    plugins,
  };
};
