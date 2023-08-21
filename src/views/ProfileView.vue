<script setup>
  import Navbar from '../components/NavbarSection.vue';
  import Button from '../components/ButtonSection.vue';
  import Group from '../components/GroupSection.vue';
  import group from '../assets/images/group.jpg';
  import group2 from '../assets/images/group2.jpg';
  import group3 from '../assets/images/group3.jpg';
  import group4 from '../assets/images/group4.jpg';
  import group5 from '../assets/images/group5.jpg';

  const groups = [
    {
      name: "Group 1",
      description: "Group 1 description",
      size: 6,
      study_methods: ["Slides", "Night crawlers"],
      icon: group,
      members: ["1234", "1234", "1234"]
    },{
      name: "Group 2",
      description: "Group 2 description",
      size: 4,
      study_methods: ["Slides", "Night crawlers"],
      icon: group2,
      members: ["1234", "1234", "1234"]
    },{
      name: "Group 3",
      description: "Group 3 description",
      size: 5,
      study_methods: ["Slides", "Night crawlers"],
      icon: group3,
      members: ["1234", "1234"]
    },{
      name: "Group 4",
      description: "Group 4 description",
      size: 3,
      study_methods: ["Slides", "Night crawlers"],
      icon: group4,
      members: ["1234", "1234"]
    },{
      name: "Group 5",
      description: "Group 5 description",
      size: 2,
      study_methods: ["Slides", "Night crawlers"],
      icon: group5,
      members: ["1234"]
    },
  ]
</script>

<template>
  <main class="min-h-screen">
    <Navbar />
    <div class="profileContainer min-h-screen flex flex-wrap gap-x-12 gap-y-8 items-start px-12 justify-center">
      
      <div class="profile w-300 min-h-screen border-r pt-12 pr-4"> 
        <div class="w-full flex flex-wrap items-center justify-start">
          <div class="profileImage w-16 h-16 rounded-full overflow-hidden">
            <img class="w-full h-full object-contain" src="https://via.placeholder.com/250" alt="profile image" />
          </div>
  
          <div class="profileInfo w-fit flex flex-wrap items-end gap-8 ml-4 h-fit">
            <div>
              <h3 class="text-xl font-bold text-custom-dark-green">John Doe</h3>
              <p class="text-sm text-slate-700">email@gmail.com</p>
            </div>
            <button class="cursor-pointer text-slate-50 border px-4 rounded bg-custom-dark-green underline text-sm">Edit</button>
          </div>
        </div>

        <div class="profileInfo flex flex-wrap gap-6 items-start justify-between mt-8 py-8 px-4 w-full border-t border-slate-400">
          <p class="flex flex-col items-start justify-center h-fit w-full">
            <span class="text-xl font-bold">Study Method</span>
            <span class="text-sm"> Group study, solo</span>
          </p>
          <p class="flex flex-col items-start justify-center h-fit w-full">
            <span class="text-xl font-bold">Subjects</span>
            <span class="text-sm">Physiology, Medical Biochemistry</span>
          </p>
          <p class="flex flex-col items-start justify-center h-fit w-full">
            <span class="text-xl font-bold">Education Level</span>
            <span class="text-sm">100 Level</span>
          </p>
          <div class="flex flex-col items-start justify-center h-fit w-full">
            <span class="text-xl font-bold">Groups</span>
            <ol class="text-sm list-decimal px-4">
              <li>Exquisite group</li>
              <li>Standard group</li>
            </ol>
          </div>
        </div>
      </div>

      <div class="userGroups w-500 h-screen overflow-y-auto border-r pt-12">
        <h2 class="w-full flex items-end justify-between pr-4 mb-4">
          <span class="text-3xl text-custom-dark-green font-bold underline underline-offset-4">Groups</span>
          <span class="text-sm cursor-pointer border px-3 py-1 rounded text-slate-50 bg-custom-dark-green">Create</span>
        </h2>
        <!-- <Group /> -->
        <div v-if="groups" class="pt-5 groups flex flex-wrap gap-x-6 gap-y-4 items-center justify-center">
          <template v-for="group in groups">
            <Group :group="group" join="false" height="h-auto pb-4" />
          </template>
        </div>
        <p v-else>No groups joined</p>
        <!-- <template v-for="group in groups">
          <Group :group="group" />
        </template> -->
      </div>

      <div class="userSchedule w-300 h-screen overflow-y-auto pt-12">
        <h2 class="mb-4 text-3xl text-custom-dark-green font-bold underline underline-offset-4">Today's Schedule</h2>
        <p>No schedule</p>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>