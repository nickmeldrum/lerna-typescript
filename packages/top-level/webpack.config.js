const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'eval-source-map',
  entry: './lib/top-level.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  target: 'node',
  resolve: {
    symlinks: false
  }
};
