module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    mocha: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  ignorePatterns: ['client'],
  rules: {
    'space-before-function-paren': ['error', 'never']
  }
}
