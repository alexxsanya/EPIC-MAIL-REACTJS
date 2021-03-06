const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    enforceExtension: false,
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.jsx', '.json', '.tsx', '.ts', '.scss', '.css', 'sass'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.(scss|css)$/,
      use: ['style-loader', // creates style nodes from JS strings
        'css-loader', // translates CSS into CommonJS
        'sass-loader', // compiles Sass to CSS, using Node Sass by default
      ],
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
      }],
    },
    {
      test: /\.(jpg|png|gif|svg|pdf|ico)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash:8].[ext]',
          },
        },
      ],
    },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),

  ],
  devServer: {
    historyApiFallback: true,
  },
};
