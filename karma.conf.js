var webpackTestConfig = require('./build/webpack.test.config');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: ['./test.js'],

    preprocessors: {
      './test.js': ['webpack']
    },

    browsers: ['Chrome'],

    reporters: ['spec'],

    singleRun: true,

    webpack: webpackTestConfig
  });
};
