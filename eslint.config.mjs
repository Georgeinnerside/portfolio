import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // TypeScript unused variables (more flexible options)
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error" if you want it stricter
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // React unescaped entities (less strict)
      "react/no-unescaped-entities": [
        "warn",
        {
          forbid: [">", "}"], // Only forbid these characters
        },
      ],
    },
  },
];

export default eslintConfig;
