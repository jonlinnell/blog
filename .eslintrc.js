module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  plugins: [
    'react',
  ],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  rules: {
    strict: ['error', 'global'],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
