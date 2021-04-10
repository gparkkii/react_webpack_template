const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  name: 'webpack-config',
  mode: 'development',
  devtool: 'eval',
  entry: {
    app : './src/index.js'
  },
  resolve: { extensions: ['.js', '.jsx', '.json'] },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js'
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
  devServer: {
    historyApiFallback: true,
    port: 8080,
    contentBase: path.join(__dirname, '/dist'),  // contentBase는 output.path와 동일해야한다.
    proxy: {
      '/api/': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
    index: 'index.html',
    open: true,
    hot: true,
    compress: true,
    inline: true,
    overlay: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
