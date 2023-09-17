import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/pages/Index/Index.vue'

const routes: RouteRecordRaw[] = [{ path: '/', component: Index }]

export const router = createRouter({
  // 为了易于部署，使用 hash 模式，可以修改。
  history: createWebHashHistory(),
  routes,
})
