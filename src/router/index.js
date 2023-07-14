import { createRouter, createWebHistory } from 'vue-router';
import HeroSection from '../components/HeroSection.vue';
import Login from '../components/LoginSection.vue';
import Signup from '../components/SignupSection.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeroSection
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
  ]
})

export default router
