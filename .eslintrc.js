module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  plugins: ['html'],
  rules: {
    'no-param-reassign': [2, { props: false }],
    'no-underscore-dangle': 'never',
  },
};
