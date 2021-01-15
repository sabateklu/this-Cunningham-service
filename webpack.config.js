const path = require('path');

module.exports = {
  entry: './trip-advisor-service/src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'trip-advisor-service/public'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './trip-advisor-service/public',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  mode: 'development',
};
