// eslint.config.js
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script", // use "module" if you're using import/export
    },
    rules: {
      semi: "error",
      quotes: ["error", "double"],
      "no-unused-vars": "warn",
      "no-console": "off", // allow console.log for simple apps
    },
  },
];
