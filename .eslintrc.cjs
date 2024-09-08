/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "@vue/prettier",
    "@vue/typescript",
    "plugin:vue-scoped-css/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
