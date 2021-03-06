const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new Visualizer({
      filename: 'stat/visulizer.html',
    }),
    new webpack.ProvidePlugin({
      join: ['lodash', 'join']
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: 'single',
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all',
    //     }
    //   }
    // }
  }
};
