<script setup>
  import user from '../assets/images/user.jpg';
  import { useUsers } from '../store/users';
  import { useGroups } from '../store/groups';
  import { storeToRefs } from 'pinia';

  import GroupSection from '../components/GroupSection.vue';
  import ButtonSection from '../components/ButtonSection.vue';

  const userStore = useUsers();
  const groupStore = useGroups();

  const { currentUser } = storeToRefs(userStore);
  const { getUserGroup } = storeToRefs(groupStore);

</script>

<template>
  <main class="min-h-screen pt-20">
    <div class="profileContainer flex gap-x-24 flex-wrap items-center justify-center py-12">
      <div class="profileDetails w-450 box-border">
        <h2 class="text-4xl font-bold mb-4">{{ currentUser.fullname }}</h2>
        <p class="my-2" v-if="currentUser.bio">{{ currentUser.bio }}</p>
        <p class="my-2">Email: {{ currentUser.email }}</p>
        <p class="capitalize my-2">Education Level: {{ currentUser.education_level }}</p>
        <p class="capitalize my-2">Study Method: {{ currentUser.study_method }}</p>
        <div class="flex gap-2 capitalize">
          <h3>Subjects:</h3>
          <span v-for="subject in currentUser.subjects"> {{ subject }}, </span>
        </div>

        <div class="profileBtns mt-8 w-fit flex gap-x-8 gap-y-4">
          <ButtonSection color="bg-custom-green text-slate-50" buttonText="Edit profile" />
          <ButtonSection color="bg-custom-green text-slate-50" buttonText="Create group" />
        </div>
      </div>

      <div class="shadow-lg overflow-hidden profileImage w-300 h-350 border rounded-xl overflow-hden">
        <img v-if="currentUser.image" class="w-full h-full object-cover" :src="currentUser.image" alt="UserImage">
        <img v-else class="w-full h-full object-contain" src="https://img.icons8.com/pulsar-line/96/user.png" alt="user"/>
      </div>
    </div>

    <div class="userGroupsContainer px-16 py-12 mt-12 bg-custom-light-green min-h-full">
      <h2 class="text-4xl font-bold">Groups</h2>
      <div class="groups flex gap-x-12 gap-y-8 flex-wrap items-center justify-center">
        <template v-if="currentUser.groups" v-for="group in currentUser.groups">
          <GroupSection :group="getUserGroup(group)" />
        </template>

        <div v-else>
          <h3>No groups yet</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>