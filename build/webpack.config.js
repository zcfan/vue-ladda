var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vue-ladda.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }
    ]
  },
  plugins:[
    // TODO: move to prod config file
    //new webpack.optimize.UglifyJsPlugin({
    //  beautify: false,
    //  mangle: {
    //    screw_ie8: true,
    //    keep_fnames: true
    //  },
    //  compress: {
    //    screw_ie8: true
    //  },
    //  comments: false
    //})
  ]
};
