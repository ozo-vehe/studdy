<script setup>
  import { RouterLink } from 'vue-router'
  import { useUsers } from '../store/users';
import { storeToRefs } from 'pinia';

  const userStore = useUsers();
  const { login } = storeToRefs(userStore);

  defineProps({
    theme: Object,
  })

</script>

<template>
  <nav :class="theme.bg, theme.color" class="flex flex-wrap gap-4 items-center justify-between px-12 py-4 shadow shadow-slate-700/10">
    <div class="logo">
      <RouterLink to="/">
        <p class="border-l-2 border-slate-900 pl-2 text-3xl font-bold">Studdy</p>
      </RouterLink>
    </div>

    <div class="navMenu" v-if="!login">
      <ul class="flex gap-x-8 gap-y-4 items-center justify-center">
        <li class="border px-6 py-2 rounded-lg"><RouterLink to='/login'>Login</RouterLink></li>
        <li class="border px-6 py-2 rounded-lg"><RouterLink to='/signup'>Sign up</RouterLink></li>
      </ul>
    </div>

    <div v-else>
      <p>User Logged in</p>
    </div>
  </nav>
</template>

<style scoped>
</style>