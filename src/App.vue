<script setup>
  import { RouterView } from 'vue-router';
  import { useUsers } from './store/users';
  import { useGroups } from './store/groups';
  import { onBeforeMount } from 'vue'
  // Import components
  import Footer from './components/FooterSection.vue';

  const usersStore = useUsers();
  const groupStore = useGroups();

  const { getUsers } = usersStore;
  const { getGroups } = groupStore;

  onBeforeMount(async () => {
    await getUsers();
    await getGroups();
  })
</script>

<template>
  <RouterView />
  <Footer />
</template>

<style scoped>
</style>
