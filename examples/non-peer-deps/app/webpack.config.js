const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type{import("webpack").Configuration} */
module.exports = {
  entry: path.resolve("src", "index.js"),
  output: {
    path: path.resolve("build"),
    clean: true,
  },
  devtool: "source-map",
  plugins: [new HtmlWebpackPlugin()],
};
