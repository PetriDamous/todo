const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.MODE,
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/scripts"),
    clean: true,
    hashFunction: "sha256", // Use a supported hash function
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    compress: true,
    open: false,
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
    new CleanWebpackPlugin(), // Clean the output directory before each build
  ],
};

// Enable legacy OpenSSL provider
process.env.NODE_OPTIONS = "--openssl-legacy-provider";
