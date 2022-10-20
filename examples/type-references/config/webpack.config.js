/** @type{(entryPath: string, outputPath: string) => import("webpack").Configuration} */
module.exports = (entryPath, outputPath) => ({
  mode: "production",
  entry: entryPath,
  output: {
    path: outputPath,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.png$/i,
        type: "asset/resource",
      },
      {
        test: /\.ts/i,
        loader: require.resolve("ts-loader"),
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
});
