const createConfig = require("@innsersource/config");
const path = require("path");

module.exports = createConfig(
  path.resolve(__dirname, "src", "index.ts"),
  path.resolve(__dirname, "build")
);
