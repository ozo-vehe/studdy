<script setup>
  import { RouterView } from 'vue-router';
  import { useUsers } from './store/users';
  import { useGroups } from './store/groups';
  import { onBeforeMount } from 'vue'
  import Navbar from './components/NavbarSection.vue';

  const usersStore = useUsers();
  const groupStore = useGroups();

  const { getUsers } = usersStore;
  const { getGroups } = groupStore;

  const defaultTheme = {
    bg: "bg-custom-green",
    color: "text-slate-50"
  }
  const lightTheme = {
    bg: "bg-custom-white",
    color: "text-slate-800",
  }

  onBeforeMount(async () => {
    await getUsers();
    await getGroups();
  })
</script>

<template>
  <Navbar v-if="$route.name == 'profile'" :theme="lightTheme" />
  <Navbar v-else :theme="defaultTheme" />
  <RouterView />
</template>

<style scoped>
</style>
