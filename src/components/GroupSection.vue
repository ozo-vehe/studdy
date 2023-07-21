<script setup>
  defineProps({
    group: Object,
  })
</script>

<template>
  <div class="group bg-white px-1 my-8 flex flex-wrap gap-4 items-center justify-center w-500 h-250 overflow-hidden">
    <div class="groupIcon w-200 h-200 rounded-full overflow-hidden">
      <img class="mix-blend-multiply w-full h-full object-cover" :src="group.icon" alt="Group Icon">
    </div>

    <div class="groupDetails w-250">
      <h3 class="text-2xl capitalize font-bold mb-2">{{ group.name }}</h3>
      <p class="my-3"><span class="font-bold">Description:</span> {{ group.description }}</p>
      <p class="my-3"><span class="font-bold">Group Size:</span> {{ group.size }}</p>
      <p class="capitalize"><span class="font-bold">Study Method:</span> {{ group.study_method }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>