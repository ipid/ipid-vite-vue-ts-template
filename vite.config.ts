import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 参阅 https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 支持 .vue 组件
    vue(),

    // 支持 Vue 3 的 JSX 语法
    vueJsx(),

    // 支持在 import { El** } 时自动插入 import 语句，以引入对应的样式
    ElementPlus({
      defaultLocale: 'zh-cn',
    }),
  ],
})
