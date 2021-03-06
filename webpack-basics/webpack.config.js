const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module:{
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use:[
          {
            loader: "babel-loader",
          }
        ]
      },
      {
        test: /\.html$/,
        use:[
          {
            loader: "html-loader",
            options: {minimize: true}
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:[
          "file-loader"
        ]
      },
      {
        test: /\.css$/,
        use:[
          "style-loader", "css-loader", "sass-loader"
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      //Options similar to webpackOptions.output
      //Both optional
      filename: "[name].css",
      chunkFilename: "[id].css"

    })
  ]
}
