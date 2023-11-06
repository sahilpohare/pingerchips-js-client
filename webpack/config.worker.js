var path = require('path');
var NormalModuleReplacementPlugin = require('webpack')
  .NormalModuleReplacementPlugin;
var version = require('../package').version;
const { merge } = require('webpack-merge');
var webpack = require('webpack');
var configShared = require('./config.shared');

var filename = configShared.optimization.minimize
  ? 'pingerchips.worker.min.js'
  : 'pingerchips.worker.js';

var entry = './src/core/pingerchips.js';
if (process.env.INCLUDE_TWEETNACL === 'true') {
  entry = './src/core/pingerchips-with-encryption.js';
  filename = filename.replace('pingerchips', 'pingerchips-with-encryption');
}

var config = merge(configShared, {
  entry: {
    pingerchips: entry
  },
  output: {
    library: 'Pingerchips',
    path: path.join(__dirname, '../dist/worker'),
    filename: filename,
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  resolve: {
    // in order to import the appropriate runtime.ts
    modules: ['src/runtimes/worker']
  },
  plugins: [
    new webpack.DefinePlugin({
      global: 'self',
      RUNTIME: JSON.stringify('worker')
    })
  ]
});

module.exports = config;
