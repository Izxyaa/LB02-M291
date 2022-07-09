/*
  Demo-00: Setting Up Vue Router for Vue to Use
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

//Defining the Routes (Slide-2)
export const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import('../views/About.vue')
  },{
    path: '/character',
    name: 'character',
    component: () =>
        import('../views/Message.vue'),
    /* Passing the Content */
    props: true
  },{
    path: '/shop',
    name: 'shop',
    component: () =>
        import('../views/Shop.vue')
  },{
    path: '/name',
    name: 'name',
    component: () =>
        import('../views/Name.vue')
  },{
    path: '/eingabe',
    name: 'eingabe',
    component: () =>
        import('../views/Eingabe.vue')
  },
]

//Setting up the Router Instance
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
