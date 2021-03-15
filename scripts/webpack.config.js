const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolvePath, distPath, templatePath } = require('../configs/paths')
const { development } = require('./env')
const packageJSON = require('../package.json')

module.exports = {
  mode: development ? 'development' : 'production',
  entry: resolvePath('./src/index.js'),
  output: {
    filename: development ? 'js/[name].js' : 'js/[name].[chunkhash:8].js',
    path: distPath,
  },
  devServer: {
    hot: true,
    compress: true,
    contentBase: distPath,
    port: 9000
  },
  plugins: [
    new htmlWebpackPlugin({
      title: `${packageJSON.name} 🤙`,
      template: `${templatePath}/index.html`,
    }),
    new miniCssExtractPlugin({
      filename: 'styles.css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: development,
            },
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: development,
            }
          }
        ]
      }
    ]
  }
}
