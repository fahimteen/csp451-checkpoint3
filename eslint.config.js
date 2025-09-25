import js from "@eslint/js";
import globals from "globals";

export default [
  // Ignore built files and node_modules
  { ignores: ["node_modules/**", "dist/**"] },

  // Base recommended config
  js.configs.recommended,

  // General language options
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Override for test files: allow Jest globals
  {
    files: ["tests/**/*.js", "**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
