import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/HomepageView.vue';
import Login from '../views/LoginView.vue';
import Signup from '../views/SignupView.vue';
import Profile from '../views/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
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
