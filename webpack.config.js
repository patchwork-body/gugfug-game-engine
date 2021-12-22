const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path/posix');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',

  entry: './web/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },

  plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin()],

  devServer: {
    hot: true,
    port: 10100,
  },

  experiments: {
    asyncWebAssembly: true,
  },
};
