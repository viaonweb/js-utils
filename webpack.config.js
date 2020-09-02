const path = require('path');
const glob = require('glob');
const getEntry = (globPath) => {
  let entries = {};
  glob.sync(globPath+'js').forEach(function(entry) {
    fileName = entry.split('/')[2].split('.')[0];
    entries[fileName] = entry;
  });
  return entries;
};

module.exports = {
  mode: 'production',
  entry: getEntry('./src/*'),
  // externals: 'lodash',
  output: {
    path: path.resolve(__dirname,'lib'),
    filename: '[name].js',
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