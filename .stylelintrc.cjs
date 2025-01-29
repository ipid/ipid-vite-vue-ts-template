const SCSS_RULES = {
  'scss/selector-no-union-class-name': true,
}

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      extends: ['stylelint-config-recommended-scss', 'stylelint-config-recommended-vue/scss'],
      rules: { ...SCSS_RULES },
    },
    {
      files: ['*.scss', '*.css'],
      extends: 'stylelint-config-recommended-scss',
      rules: { ...SCSS_RULES },
    },
    { files: ['*.html', '*.htm'], extends: 'stylelint-config-recommended', customSyntax: 'postcss-html' },
  ],
  rules: [],
}
