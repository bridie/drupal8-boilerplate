const path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, '../js/index.js'),
    path.resolve(__dirname, '../css/style.scss')
  ],
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'style.css',
              outputPath: '/css',
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  }
};
