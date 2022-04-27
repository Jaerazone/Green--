import Vue from 'vue'
import VueRouter from 'vue-router'
import MemoList from '../views/MemoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MemoList
  },
  {
    path: '/list/:id', // :id 파람으로 들어감
    name: 'listpage',
    component: function () {
      return import('../views/PageView.vue')
    }
  },
  {
    path: '/writeform',
    name: 'writeform',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/WriteForm.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
