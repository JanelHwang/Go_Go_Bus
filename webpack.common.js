// ./webpack.common.js

// const path = require('path');
// 新增
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // ...略
  
  // 新增
  plugins: [ new VueLoaderPlugin() ],
  
  // ...
  
  module: {
      rules: [
      // 新增 rules
          {
              test: /\.vue$/,
              loader: 'vue-loader',
          },
      ]
  }
}