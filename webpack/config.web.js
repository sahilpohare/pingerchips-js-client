var path = require('path');
var webpack = require('webpack');
var NormalModuleReplacementPlugin = webpack.NormalModuleReplacementPlugin;
const { merge } = require('webpack-merge');
var configShared = require('./config.shared');

var filename = configShared.optimization.minimize
  ? 'pingerchips.min.js'
  : 'pingerchips.js';

var entry = './src/core/pingerchips.js';
if (process.env.INCLUDE_TWEETNACL === 'true') {
  entry = './src/core/pingerchips-with-encryption.js';
  filename = filename.replace('pingerchips', 'pingerchips-with-encryption');
}

module.exports = merge({}, configShared, {
  entry: {
    pingerchips: entry
  },
  output: {
    library: 'Pingerchips',
    path: path.join(__dirname, '../dist/web'),
    filename: filename,
    libraryTarget: 'umd'
  },
  resolve: {
    modules: ['src/runtimes/web']
  },
  plugins: [
    new webpack.DefinePlugin({
      global: 'window',
      RUNTIME: JSON.stringify('web')
    })
  ]
});
