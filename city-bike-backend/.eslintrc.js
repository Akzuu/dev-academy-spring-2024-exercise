module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [],
  ignorePatterns: [".eslintrc.js"],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  root: true,
  rules: {
    "no-console": "warn",
    semi: ["error", "always"],
    "@typescript-eslint/semi": ["error", "always"],
    "return-await": "off",
    "@typescript-eslint/return-await": ["error", "never"],
    "eol-last": ["error", "always"],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/dot-notation": 0,
    "@typescript-eslint/strict-boolean-expressions": "off",
  },
};
