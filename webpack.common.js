const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const src = path.join(__dirname, 'src');

module.exports = {
  entry: path.resolve(src, 'js/render.jsx'),
  resolve: {
    //import文のパス指定にnode_modulesを省略できるようにします
    modules: ['node_modules'],
    //.jsまたは.jsxの拡張子を省略できるようにします
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        //loaderを複数使用する場合はuseを使います
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(src, 'html/index.html')
    }),
    new MiniCSSExtractPlugin({
      filename: 'app.css'
    })
  ]
};
