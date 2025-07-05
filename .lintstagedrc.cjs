module.exports = {
  'src/**/*.{js,jsx,cjs,mjs}': ['src文件夹下禁止编写JavaScript，可将文件重命名为.ts。'],
  '*.{js,jsx,cjs,mjs,ts,tsx,vue}': ['eslint', 'prettier --write'],
  '*.{vue,html}': ['stylelint', 'prettier --write'],
  '*.{json,yaml,yml,md}': ['prettier --write'],
  '*.scss': ['stylelint --fix', 'prettier --write'],
  '*.htm': ['禁止编写htm文件，请将文件重命名为html。'],
  '*.{sass,css,less,stylus}': ['禁止编写纯CSS、SASS、Less或Stylus，请将文件重命名为.scss。'],
}
