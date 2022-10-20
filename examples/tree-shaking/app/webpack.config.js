const path = require("path");

/** @type{import("webpack").Configuration} */
module.exports = {
  mode: "production",
  entry: path.resolve("src", "index.js"),
  output: {
    path: path.resolve("build"),
    clean: true,
  },
  devtool: "source-map",
};
