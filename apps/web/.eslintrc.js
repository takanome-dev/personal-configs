module.exports = {
  root: true,
  extends: ["@takanome/eslint-config"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
};
