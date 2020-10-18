import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// this.$route... // this.$router

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue')
  },

  {
    path: '*',
    name: '404',
    component: {render: (h) => h('h2', {}, ['oh no 404'])}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
