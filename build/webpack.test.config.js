var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./webpack.base.config');
var merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"test"'
      }
    })
  ]
});
