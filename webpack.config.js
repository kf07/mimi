const webpack = require('webpack');

const dist = path.join(__dirname, 'dist');

module.exports = {
  //developmentモードで実行
  mode: 'development',
  //ビルドを実行するファイルパス
  entry: path.resolve(src, 'js/render.jsx'),
  output: {
    //生成されるファイル名
    filename: 'index.bundle.js',
    //生成先のディレクトリー
    path: dist
  },
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
        enforce: 'pre',
        //使用する loader
        loader: 'eslint-loader'
      },
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
  devServer: {
    contentBase: dist, //開発サーバーを立ち上げる参照ディレクトリ
    hot: true, //hot-reloadを有効にます
    port: 3000 //サーバーを立ち上げるポート番号
  },
  plugins: [
    //hot-reloadを有効にするプラグインを追加
    new webpack.HotModuleReplacementPlugin(),
    //HtmlWebpackPluginを追加
    new HtmlWebpackPlugin({
      template: path.resolve(src, 'html/index.html')
    }),
    new MiniCSSExtractPlugin({
      filename: 'app.css'
    }) //MiniCSSExtractPlugin
  ],
  //sourceMappingの設定
  devtool: 'cheap-module-eval-source-map'
};
