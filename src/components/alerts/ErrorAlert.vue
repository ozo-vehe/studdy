<script setup>
  import { ref } from 'vue';
  defineProps({
    message: String,
  })
</script>

<template>
  <main class="min-w-40 text-center px-8 py-3 absolute top-8 left-1/2 -translate-x-1/2 text-slate-50 border border-red-500 bg-red-500/60 rounded-lg">
    <p>Error: {{ message.toLowerCase() }}</p>
  </main>
</template>

<style scoped>
</style>