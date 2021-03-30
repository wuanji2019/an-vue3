import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { asyncRoutes, constantRoutes } from './index.config'

export const asyncRoute: Array<RouteRecordRaw> = [
  ...asyncRoutes
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes
})

export function resetRouter() {
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
