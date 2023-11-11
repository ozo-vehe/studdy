<script setup>
  import Navbar from '../components/NavbarSection.vue';
  import Button from '../components/ButtonSection.vue';
  import Group from '../components/GroupSection.vue';
  import group from '../assets/images/group.jpg';
  import group2 from '../assets/images/group2.jpg';
  import group3 from '../assets/images/group3.jpg';
  import group4 from '../assets/images/group4.jpg';
  import group5 from '../assets/images/group5.jpg';

  import { useUsers } from '../store/users';
  import { useRoute } from 'vue-router';
  import { ref, onBeforeMount } from 'vue';

  const userStore = useUsers();
  const { getUser } = userStore;
  const route = useRoute();

  const user = ref({});

  onBeforeMount(async () => {
    user.value = await getUser(route.params.id);
    console.log(user.value);
  });

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
    <section class="profileContainer border-b min-h-screen flex flex-wrap items-start justify-center">
      <header class="relative h-500 w-full">
        <div class="userImage absolute z-0 top-0 left-0 w-full h-full">
          <img class="w-full h-full object-top object-cover" :src="user.image" alt="">
        </div>

        <div class="userDetails bg-custom-dark-green/70 relative w-full h-full flex items-end justify-between px-12 pb-4">
          <div class="w-full">
            <h2 class="text-6xl font-bold text-gray-900">{{ user.fullname }}</h2>
            <p class="text-2xl text-gray-900">{{ user.email }}</p>

            <div class="mt-12 w-full flex flex-wrap items-start justify-start gap-x-8 gap-y-4 mb-8">
              <p class="flex flex-col items-start justify-center h-fit min-w-fit">
                <span class="text-xl font-bold">Study Method</span>
                <span v-if="user.studyMethod" class="text-sm capitalize">{{ user.studyMethod }},</span>
              </p>

              <p class="flex flex-col items-start justify-center h-fit min-w-fit">
                <span class="text-xl font-bold">Subjects</span>
                <template v-if="user.subjects" v-for="subject in user.subjects">
                  <span class="text-sm capitalize">{{ subject }}</span>
                </template>
              </p>
              <p class="flex flex-col items-start justify-center h-fit min-w-fit">
                <span class="text-xl font-bold">Education Level</span>
                <span v-if="user.level" class="text-sm">{{ user.level }} Level</span>
              </p>
              <div class="flex flex-col items-start justify-center h-fit min-w-fit">
                <span class="text-xl font-bold">Groups</span>
                <ol class="text-sm list-decimal px-4">
                  <li v-for="group in user.groups">{{ group }}</li>
                </ol>
              </div>
            </div>
          </div>
          <button class="cursor-pointer bg-gray-900 py-1 rounded text-slate-100 underline text-sm w-28 mb-8">Edit Profile</button>
        </div>
      </header>

      <section class="profileDetails w-full flex items-start justify-between px-12 pt-12">
        <section class="userGroups w-full">
          <h2 class="w-full flex items-end justify-between pr-4 mb-4">
            <span class="text-3xl text-custom-dark-green font-bold underline underline-offset-4">Groups</span>
            <span class="text-sm cursor-pointer px-3 py-1 rounded text-slate-50 bg-custom-dark-green">Create</span>
          </h2>

          <div v-if="groups" class="pt-5 groups flex flex-wrap gap-x-6 gap-y-4 items-center justify-start">
            <template v-if="user.groups" v-for="group in groups">
              <Group :group="group" join="false" height="h-auto pb-4" />
            </template>
            <h3 class="text-xl" v-else>No group joined or created</h3>
          </div>
          <p v-else>No groups joined</p>
        </section>
      </section>
    </section>
  </main>
</template>

<style scoped>
</style>