<script setup>
  // Import component
  import Group from './GroupSection.vue';

  defineProps({
    groups: Array,
  })
</script>

<template>
  <main class="px-12 py-20">
    <h2 class="text-custom-dark-green text-center text-3xl font-bold mb-8">Available Groups</h2>
    <div class="groups flex flex-wrap gap-x-6 gap-y-4 items-center justify-center">
      <template v-for="group in groups">
        <Group :group="group" />
    </template>
    </div>
  </main>
</template>

<style scoped>

</style>