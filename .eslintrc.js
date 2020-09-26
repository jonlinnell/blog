module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
  ],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    '__PATH_PREFIX__': true,
  },
  rules: {
    strict: ['error', 'global'],
    'react/prop-types': 'warn',
  }
}
