const path = require('path')
const hello = require('./plugin/test-hello')
const test2 = require('./plugin/test2')
const noticy = require('./plugin/noticy')
const mytest = require('./plugin/mytest')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')

module.exports = {
  mode: 'none',
  entry: path.join(__dirname, './src/test.js'),
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].js'
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, 'loaders'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: [ 'html-loader', 'html-to-low'],
        include: path.resolve(__dirname, './src'),
        // options: {
        //   minimize: true
        // }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src'),
        use: [{
            loader: path.resolve(__dirname, 'loaders/add-author.js'),
            options: {
              author: 'FantasyGao'
            }
          }, {
            loader: 'to-down-case',
            options: {
              add: true
            }
          }
        ],
      }
    ]
  },
  resolve: {
    alias: {
      'moudle': path.resolve('./my_modules/'),
      'ymoment': './../my_modules/mod.js'
    },
    modules: [path.resolve(__dirname, './my_modules'), 'node_modules'],
    extensions: ['.js']
  },
  plugins: [
    new hello({options: 'first'}),
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new test2(),
    new noticy(),
    new mytest(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify("5fa3b9"),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: "1+1",
      "typeof window": JSON.stringify("object")
    })
  ]
};
