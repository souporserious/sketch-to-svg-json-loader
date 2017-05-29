const { resolve } = require('path')
const webpack = require('webpack')

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, 'example/index.js'),
  ],

  output: {
    path: resolve(__dirname, 'example'),
    filename: 'bundle.js',
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: resolve(__dirname, 'example'),
    inline: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(sketch)/,
        use: [{ loader: './index' }],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}

module.exports = config
