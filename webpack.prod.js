const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const docs = path.join(__dirname,'docs');

module.exports = merge(common,{
  //productionモードで実行
  mode: 'production',
  output: {
    //生成されるファイル名
    filename:'app.min.js',
    //生成先のディレクトリー
    path: docs
  }
});
