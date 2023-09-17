module.exports = {
  'src/**/*.{js,jsx,cjs,mjs}': [
    'src文件夹下禁止编写JavaScript，可将文件重命名为.ts。',
  ],
  '*.{js,jsx,cjs,mjs,ts,tsx,vue}': ['eslint', 'prettier --check'],
  '*.{vue,html,htm}': ['stylelint', 'prettier --check'],
  '*.{json,yaml,yml,md}': ['prettier --check'],
  '*.{ts,tsx,vue}': () => 'vue-tsc --project tsconfig.json',
  '*.scss': ['stylelint --fix', 'prettier --write'],
  '*.{css,less,stylus}': [
    '禁止编写纯CSS、Less或Stylus，请将文件重命名为.scss。',
  ],
}
