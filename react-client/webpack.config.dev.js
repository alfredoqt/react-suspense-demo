const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 3000,
    disableHostCheck: true,
    compress: true
  },
  devtool: 'source-map'
});
