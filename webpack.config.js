const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(process.cwd(), "dist"),
  },
  entry: {
    background: "./src/background.js",
    contentScript: "./src/contentScript.js",
    options: "./src/options.js",
    popup: "./src/popup.js",
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
    new HtmlWebPackPlugin({
      template: "./src/popup.html",
      chunks: ["popup"],
      filename: `popup.html`,
    }),
    new HtmlWebPackPlugin({
      template: "./src/options.html",
      chunks: ["options"],
      filename: `options.html`,
    }),
  ],
};
