const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: ['@sxzz/eslint-config-ts', '@sxzz/eslint-config-prettier'],
  rules: {
    'unicorn/prefer-string-replace-all': 'off',
  },
})
