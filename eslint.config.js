import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    ignores: ["dist"],
  },
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "no-unused-vars": "error",
      "no-console": "off",
      "prettier/prettier": "error",
    },
  },
];
