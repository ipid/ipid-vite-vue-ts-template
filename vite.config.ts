import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'

// 参阅 https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 支持 .vue 组件
    vue(),

    // 支持 Vue 3 的 JSX 语法
    vueJsx(),

    // 支持在 import { El** } 时自动插入 import 语句，以引入对应的 CSS 文件
    ElementPlus({
      // 把错误提示等信息的语言设为简体中文
      defaultLocale: 'zh-cn',
    }),
  ],

  resolve: {
    alias: {
      // 配置别名，这样就能在 import 的时候使用 @ 表示 src 目录。
      // 需要与 tsconfig.json 中的 paths 配置保持一致
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
