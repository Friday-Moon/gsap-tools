const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './src/index.js',

  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist'),
    filename: 'gsap-tools.js',
  },

  externals: {
    react: 'react',
    gsap: 'gsap',
  },

  resolve: {
    modules: [
      './src',
      './src/app',
      'node_modules',
    ],
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /(\.scss|\.css)$/,
        use: [
          'classnames-loader',
          'simple-universal-style-loader',
          'css-loader?modules=1&importLoaders=1',
          'postcss-loader',
          'sass-loader',
        ],
        exclude: /node_modules.*\.css$/,
      }
    ]
  },
};
