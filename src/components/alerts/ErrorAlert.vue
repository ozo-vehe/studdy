<script setup>
  defineProps({
    message: String,
  })
</script>

<template>
  <main class="min-w-40 text-center px-8 py-3 absolute top-8 left-1/2 -translate-x-1/2 border border-red-500 bg-red-500/60 rounded-sm">
    <p class="text-white">Error: {{ message.toLowerCase() }}</p>
  </main>
</template>

<style scoped>
</style>