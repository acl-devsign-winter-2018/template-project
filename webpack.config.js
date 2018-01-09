const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  plugins: [
    new HtmlPlugin({ template: `./src/index.html` }),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
            attrs: false
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1, }
          },
          'postcss-loader'
        ]
      }
    ]
  }
};