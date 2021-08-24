const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: path.resolve('client', 'index.jsx'),
  output: {
    // output will be stored in dist dir
    path: path.resolve('dist'),
    // naming bundled file
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // match & resolve js & jsx files w/ their corresponding loader
        test: /\.(js|jsx)$/,
        // ignore transpiling node_modules
        exclude: /node_modules/,
        // use the babel loader for transpiling code
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // pure CSS (i.e. w/o CSS modules)
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '../'),
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
