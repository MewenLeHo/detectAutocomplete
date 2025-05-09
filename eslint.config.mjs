// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base config for JavaScript files
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: globals.browser,
    },
    rules: {
      "no-console": "warn",
      "no-var": "error",
      "prefer-const": "error",
      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],
      "no-unused-labels": "off",
    },
    ignores: [
      ".github/**",
      "docs/**",
      "eslint.config.mjs",
      "package.json",
      "package-lock.json",
      "README.md",
      "detectAutocomplete.min.js",
    ],
  },
]);
