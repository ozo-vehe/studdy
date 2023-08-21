<script setup>
  // Import component
  import Button from './ButtonSection.vue';

  defineProps({
    group: Object,
    join: String,
    height: String
  })
</script>

<template>
  <main :class="height" class="group relative border border-slate-100 bg-slate-50 rounded-lg my-4 w-350 overflow-hidden">
    <div class="groupIcon h-250">
      <img class="w-full h-full object-cover" :src="group.icon" alt="Group Icon">
    </div>

    <p class="absolute top-4 text-sm font-bold right-0 bg-custom-dark-green text-slate-50 px-5 py-2 rounded-l-md">Size: {{ group.size }}</p>

    <div class="groupDetails px-4 text-center">
      <h3 class="text-left text-2xl text-custom-dark-green capitalize font-bold mt-4 mb-2">{{ group.name }}</h3>
      <p class="text-left"><span class="font-bold">Description:</span> {{ group.description }}</p>
      <p class="text-left capitalize">
        <span class="font-bold">Study Methods: </span> 
        <span v-for="study_method in group.study_methods">{{ study_method }}, </span>
      </p>
      <p class="text-left"><span class="font-bold">Members: </span> {{ group.members.length }}</p>

      <Button v-if="join === 'true'" buttonText="join" color="border border-custom-dark-green mt-4 hover:bg-custom-dark-green bg-slate-50 hover:text-slate-50 text-custom-dark-green transition-all duration-200 hover:shadow-md capitalize py-1 min-w-fit"/>
    </div>
  </main>
</template>

<style scoped>
</style>