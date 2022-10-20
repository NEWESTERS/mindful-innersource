// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-config/patch/modern-module-resolution");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "@rushstack/eslint-config/profile/node-trusted-tool",
    "@rushstack/eslint-config/mixins/tsdoc",
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  ignorePatterns: [".eslintrc.js", "build"],
};
