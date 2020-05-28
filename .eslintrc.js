module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
};
