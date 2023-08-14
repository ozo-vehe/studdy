<script setup>
  defineProps({
    buttonText: String,
    color: String
  })
</script>

<template>
  <button :class="color" class="px-6 py-2 rounded cursor-pointer">{{ buttonText }}</button>
</template>

<style scoped>

</style>