module.exports = {
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    extraFileExtensions: ['.vue'],
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
  },
  overrides: [
    {
      files: ['./**/*.vue'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
}
