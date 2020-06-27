import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 登录页面路由
  {
    path: '/Login',
    name: 'Login',
    component: () => import ('../views/Login.vue')
  },
  // 城市选择页面路由
  {
    path: '/City',
    name: 'City',
    component: () => import ('../views/City')
  },
  // 分类路由
  {
    path: '/Classification',
    name: 'Classification',
    component: () => import ('../views/Classification.vue')
  },
  // 购物车路由
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: () => import ('../views/ShoppingCart.vue')
  },
  // 用户信息路由
  {
    path: '/UserInformation',
    name: 'UserInformation',
    component: () => import ('../views/UserInformation')
  },
  // 修改用户信息
  {
    path: '/Modify',
    name: 'Modify',
    component: () => import ('../views/Modify')
  },
  // 详情页路由
  {
    path: '/details',
    name: 'Details',
    component: () => import ('../views/Details')
  },
  // 结算页面
  {
    path: '/Settlement',
    name: 'Settlement',
    component: () => import ('../views/Settlement.vue')
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
