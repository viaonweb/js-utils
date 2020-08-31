const path = require('path');
const resolve = dir => path.join(__dirname, '.', dir);

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'awesomeUtils.js',
    libraryTarget: 'umd', // 通用模块定义
    library: 'awesomeUtils',
    libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
    globalObject: 'this' // 兼容node和浏览器运行，避免window is not undefined情况
  },
  module: {
    rules: [
      
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  }
}