const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  externals: 'lodash',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'index.js',
    library: 'awesomeUtils',
    libraryTarget: 'umd'
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