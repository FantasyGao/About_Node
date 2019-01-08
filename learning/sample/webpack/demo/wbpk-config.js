const path = require('path')
const htmlWebpackPlugin =require('html-webpack-plugin')
const reload = require('./plugin/reload')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html'
    }),
    new reload()
  ]
}