<script setup>
  import Navbar from '../components/NavbarSection.vue';
  import Button from '../components/ButtonSection.vue';
  import Group from '../components/GroupSection.vue';
</script>

<template>
  <main class="min-h-screen">
    <Navbar />
    <div class="profileContainer min-h-screen flex flex-wrap gap-x-12 gap-y-8 items-start px-12 justify-center">
      
      <div class="profile w-400 min-h-screen border-r pt-12 pr-4"> 
        <div class="w-full flex flex-wrap items-center justify-start">
          <div class="profileImage w-16 h-16 rounded-full overflow-hidden">
            <img class="w-full h-full object-contain" src="https://via.placeholder.com/250" alt="profile image" />
          </div>
  
          <div class="profileInfo w-fit ml-4 h-fit">
            <h3 class="text-2xl font-bold text-custom-dark-green">John Doe</h3>
            <p class="text-sm text-slate-700">email@gmail.com</p>
          </div>

          <div class="w-full text-right">
            <button class="cursor-pointer border text-sm px-4 py-1 rounded text-slate-50 bg-custom-dark-green">Edit</button>
          </div>
        </div>

        <div class="profileInfo flex flex-wrap gap-x-4 gap-y-8 items-start justify-between mt-8 py-8 px-4 w-full border-t border-slate-400">
          <p class="flex flex-col items-start justify-center h-fit w-40 px-2">
            <span class="text-xl font-bold">Study Method</span>
            <span class="text-sm"> Group study, solo</span>
          </p>
          <p class="flex flex-col items-start justify-center h-fit w-40 px-2">
            <span class="text-xl font-bold">Subjects</span>
            <span class="text-sm">Physiology, Medical Biochemistry</span>
          </p>
          <p class="flex flex-col items-start justify-center h-fit w-40 px-2">
            <span class="text-xl font-bold">Education Level</span>
            <span class="text-sm">100 Level</span>
          </p>
          <div class="flex flex-col items-start justify-center h-fit w-40 px-2">
            <span class="text-xl font-bold">Groups</span>
            <ol class="text-sm list-decimal">
              <li>Exquisite group</li>
              <li>Standard group</li>
            </ol>
          </div>
        </div>
      </div>

      <div class="userGroups w-350 min-h-screen border-r pt-12">
        <h2 class="w-full flex items-center justify-between pr-4 mb-4">
          <span class="text-3xl text-custom-dark-green font-bold underline underline-offset-4">Groups</span>
          <span class="text-sm cursor-pointer border px-3 py-1 rounded text-slate-50 bg-custom-dark-green">Create</span>
        </h2>
        <!-- <Group /> -->
        <p>No groups joined</p>
      </div>

      <div class="userSchedule w-350 min-h-screen pt-12">
        <h2 class="mb-4 text-3xl text-custom-dark-green font-bold underline underline-offset-4">Today's Schedule</h2>
        <p>No schedule</p>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>