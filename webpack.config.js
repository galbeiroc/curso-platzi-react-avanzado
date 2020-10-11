const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  output: {
          filename: 'app.bundle.js',
          path: path.resolve(__dirname, 'dist')
  },
  plugins: [
          new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
          new HtmlWebpackPlugin()
  ]
}