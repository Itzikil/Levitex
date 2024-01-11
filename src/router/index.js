import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import cart from '../views/cart.vue'
import textilePage from '../views/textile-page.vue'
import textileDetails from '../views/textile-details.vue'
import signupPage from '../views/signup-page.vue'
import userDetails from '../views/user-details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/signup',
      name: 'signup',
      component: signupPage
    },
    {
      path: '/login',
      name: 'login',
      component: signupPage
    },
    {
      path: '/user/:id',
      name: 'user',
      component: userDetails
    },
    {
      path: '/textile',
      name: 'textile',
      component: textilePage
    },
    {
      path: '/textile/:id',
      name: 'textile-details',
      component: textileDetails
    },
    {
      path: '/explore/:id?',
      name: 'explore',
      component: textilePage
    },
  ]
})

export default router
