module.exports = {
  env: { browser: true, es2020: true },
  ignorePatterns: ["*.cjs", "*.mjs", "*.js"],
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}
