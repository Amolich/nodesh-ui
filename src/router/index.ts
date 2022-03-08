import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '@/views/Home.vue'
import LoginCookie from '@/views/LoginCookie.vue'

interface MenuInterface {
  hidden?: boolean
}
export const routes: Array<RouteRecordRaw & MenuInterface> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue"),
  },
  {
    path: '/loginCookie',
    name: 'LoginCookie',
    component: import("@/views/LoginCookie.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router