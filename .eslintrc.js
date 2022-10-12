module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'eslint-config-prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-redeclare': 'warn',
    'no-console': 'warn',
    'dot-notation': 'off',
    'spaced-comment': 'off',
    'camelcase': 'warn',
    'prefer-const': 'warn',
    'no-undef': 'warn',
    'no-extra-boolean-cast': 'off',
    'eqeqeq': 'warn',
  }
}
