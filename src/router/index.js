import { createRouter, createWebHistory } from 'vue-router';
import HeroSection from '../views/HeroView.vue';
import Login from '../views/LoginView.vue';
import Signup from '../views/SignupView.vue';
import Profile from '../views/ProfileView.vue';

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
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router
