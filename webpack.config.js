const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.MODE || "development",
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/scripts"),
    publicPath: "/scripts/",
    clean: true,
    hashFunction: "sha256",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    compress: true,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        // { from: "src/service-worker.js", to: "../service-worker.js" },
        { from: "src/manifest.webmanifest", to: "../manifest.webmanifest" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "../index.html",
    }),
  ],
};
