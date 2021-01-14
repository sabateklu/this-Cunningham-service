const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: '../public'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      { test: /\.(css)$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ]
  },
  mode: 'development'
}