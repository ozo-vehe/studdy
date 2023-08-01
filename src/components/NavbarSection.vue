<script setup>
  import { RouterLink } from 'vue-router'
  import { useUsers } from '../store/users';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router'

  // Define router
  const router = useRouter();

  const userStore = useUsers();
  const { isLoggedIn, currentUser } = storeToRefs(userStore);
  const { logout } = userStore;

  const userLogOut = async() => {
    await logout();
    router.push({name: "login"});
  }

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

    <div class="navMenu" v-if="!isLoggedIn">
      <ul class="flex gap-x-8 gap-y-4 items-center justify-center">
        <li class="border px-6 py-2 rounded-lg"><RouterLink to='/login'>Login</RouterLink></li>
        <li class="border px-6 py-2 rounded-lg"><RouterLink to='/signup'>Sign up</RouterLink></li>
      </ul>
    </div>

    <div v-else class="flex justify-center items-center gap-4 w-48">
      <div class="userImage w-12 h-12 rounded-full overflow-hidden">
        <img class="w-full h-full object-cover" :src="currentUser.image" alt="User image">
      </div>
      <button @click="userLogOut" class="border px-6 py-2 rounded-lg capitalize">Log out</button>
    </div>
  </nav>
</template>

<style scoped>
</style>