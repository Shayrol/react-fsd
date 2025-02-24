import eslint from "@eslint/js";
import eslintPluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  eslintPluginReact.configs.recommended,
  ...tseslint.configs.recommended, // TypeScript 지원 추가
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // .ts와 .tsx 추가
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
