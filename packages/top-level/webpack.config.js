const path = require('path');

module.exports = {
  entry: './lib/top-level.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'node',
  resolve: {
    symlinks: false
  }
};
