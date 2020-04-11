const path = require('path');

module.exports = {
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'Gulu',
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',  // 把 #引入的(import)# svg文件放入html/body里
        include: path.resolve(__dirname, 'lib/icons')
      }
    ]
  },
};