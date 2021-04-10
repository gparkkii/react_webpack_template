const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  name: 'webpack-config',
  mode: 'development',
  devtool: 'eval',
  entry: './src/index.js',
  resolve: { extensions: ['.js', '.jsx', '.json'] },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
        exclude: path.join(__dirname, 'node_modules'),
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
