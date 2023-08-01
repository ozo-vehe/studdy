<script setup>
  import { useUsers } from '../store/users';
  import { storeToRefs } from 'pinia';

  const userStore = useUsers();

  const { currentUser } = storeToRefs(userStore);

</script>

<template>
  <main class="">
  </main>
</template>

<style scoped>

</style>