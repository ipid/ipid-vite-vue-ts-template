import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs, configureVueProject } from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// 关于更多详情，请参考 https://github.com/vuejs/eslint-config-typescript/#advanced-setup
configureVueProject({ scriptLangs: ['ts', 'tsx'] })

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue,js,jsx,cjs,mjs}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  pluginVue.configs['flat/recommended'],
  vueTsConfigs.strictTypeChecked,
  vueTsConfigs.stylisticTypeChecked,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  skipFormatting,

  /**
   * ——————————————— 自定义规则 ———————————————
   * —— 以下是模板偏好的代码风格，你可以自由调整。 ——
   */
  {
    name: '代码风格 - 命名相关',
    rules: {
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
      'vue/slot-name-casing': ['error', 'camelCase'],
      'vue/v-on-event-hyphenation': ['error', 'never', { autofix: true }],
      'vue/no-restricted-class': [
        'error',
        String.raw`/^(?![a-z0-9]+(-[a-z0-9]+)*__[a-z0-9]+(-[a-z0-9]+)*(--[a-z0-9]+(-[a-z0-9]+)*)?$)/`,
      ],
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: ['ts', 'tsx'],
          },
          style: {
            // 目前 Stylelint 只支持将所有 vue 文件的样式都看成 SCSS，所以需强制 .vue 写 SCSS
            lang: 'scss',
          },
        },
      ],
      'vue/enforce-style-attribute': ['error', { allow: ['module'] }],
    },
  },
  {
    name: '代码风格 - 性能与安全性',
    rules: {
      'vue/no-v-html': 'error',
    },
  },
  {
    name: '代码风格 - 杂项',
    rules: {
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: 'only-allowed-literals',
        },
      ],
    },
  },
)
