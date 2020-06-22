module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'prefer-destructuring': 'off',
    'quote-props': ['error', 'consistent'],
    'object-shorthand': 0,
  },
};
