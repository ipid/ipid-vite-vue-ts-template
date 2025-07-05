import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [{ path: '/', component: () => import('@/pages/Index/PageIndex.vue') }]

export const router = createRouter({
  // 为了易于部署，使用 hash 模式，可以修改。
  history: createWebHashHistory(),
  routes,
})
