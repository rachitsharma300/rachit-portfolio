export default {
  rules: {
    'no-unused-vars': [
      'warn',
      { 
        varsIgnorePattern: '^motion$',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ]
  },
  env: {
    node: true
  }
}