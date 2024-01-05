import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import textilePage from '../views/textile-page.vue'
import textileDetails from '../views/textile-details.vue'
import signupPage from '../views/signup-page.vue'

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
      path: '/textile-page',
      name: 'textile-page',
      component: textilePage
    },
    {
      path: '/textile/:id',
      name: 'textile-details',
      component: textileDetails
    },
  ]
})

export default router
