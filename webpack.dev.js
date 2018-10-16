const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const dist = path.join(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'index.bundle.js',
    path: dist
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        //使用する loader
        loader: 'eslint-loader'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: dist, //開発サーバーを立ち上げる参照ディレクトリ
    hot: true, //hot-reloadを有効にます
    port: 3000 //サーバーを立ち上げるポート番号
  },
  plugins: [
    //hot-reloadを有効にするプラグインを追加
    new webpack.HotModuleReplacementPlugin()
  ]
});
