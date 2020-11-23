import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Index from '../views/Index'
import Teacher_Index from '../views/Teacher_Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/Index',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Index
  },
  {
    path: '/Teacher_Index',
    name:'Teacher_Index',
    component: Teacher_Index
  }
]

const router = new VueRouter({
  routes
})

export default router
