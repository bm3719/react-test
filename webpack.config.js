var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/scripts/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "src/index.html",
      filename: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
