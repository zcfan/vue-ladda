var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./webpack.base.config');
var merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  entry: './src/index.js',
  output: {
    library: 'VueLadda',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    filename: 'vue-ladda.js'
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin()
  ]
});
