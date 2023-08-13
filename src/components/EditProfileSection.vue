<script setup>
  import { useUsers } from '../store/users';
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import ButtonSection from './ButtonSection.vue';

  const userStore = useUsers();

  const { currentUser } = storeToRefs(userStore);

  // Data
  const userDetails = ref({
    ...currentUser.value
  });
  const options = [
    {name: "Mathematices", value: "mathematics"},
    {name: "Physics", value: "physics"},
    {name: "Chemistry", value: "chemistry"},
    {name: "Biology", value: "biology"},
    {name: "English", value: "english"},
    {name: "History", value: "history"},
    {name: "Geography", value: "geography"},
    {name: "Computer Science", value: "computer science"},
    {name: "Economics", value: "economics"},
    {name: "Accounting", value: "accounting"},
    {name: "Business Studies", value: "business studies"},
    {name: "Commerce", value: "commerce"},
    {name: "Literature", value: "literature"},
    {name: "Religious Studies", value: "religious studies"},
    {name: "Agriuculture", value: "agriculture"},
    {name: "Physical Education", value: "physical education"},
    {name: "Health Education", value: "health education"},
    {name: "Social Studies", value: "social studies"},
  ]
</script>

<template>
  <main class="">
    <h2 class="text-4xl font-bold mb-4">Edit Profile</h2>
    <form class="my-8 w-400">
      <div class="text-slate-900 image w-full rounded border overflow-hidden">
        <input type="file" accept="image/png, image/jpeg" name="image" class="w-full h-full border-none outline-none" placeholder="Profile Image">
      </div>

      <div class="text-slate-900 email my-4 w-full h-12 rounded border overflow-hidden">
        <input v-model="userDetails.fullname" type="text" name="fullname" class="w-full h-full pl-4 border-none outline-none" placeholder="Fullname">
      </div>
      
      <div class="text-slate-900 email my-4 w-full h-12 rounded border overflow-hidden">
        <input v-model="userDetails.email" type="email" name="email" class="w-full h-full pl-4 border-none outline-none" placeholder="Email">
      </div>
      
      <div class="text-slate-900 email my-4 w-full h-40 rounded border overflow-hidden">
        <textarea v-model="userDetails.bio" name="bio" class="w-full h-full pl-4 pt-1 border-none outline-none" placeholder="Bio"></textarea>
      </div>

      <div class="text-slate-900 email my-4 w-full h-12 rounded border overflow-hidden">
        <input v-model="userDetails.education_level" type="text" name="educationLevel" class="w-full h-full pl-4 border-none outline-none" placeholder="Education Level">
      </div>
      
      <div class="text-slate-900 email my-4 w-full h-12 rounded border overflow-hidden">
        <input v-model="userDetails.study_method" type="text" name="studyMethod" class="w-full h-full pl-4 border-none outline-none" placeholder="Study Method">
      </div>
      
      <div class="">
        <label>Subjects: </label>
        <template v-for="subject in userDetails.subjects">
          <p>{{ subject }}</p>
        </template>
        <div class="px-4 flex items-center justify-between subjects text-slate-600 email my-4 w-full h-12 rounded border">
          <select class="w-full" name="subject" id="subject">
            <option value="">Select Subject</option>
            <option v-for="option in options" :value="option.value">{{ option.name }}</option>
          </select>
        </div>
        <!-- <input v-model="userDetails.subjects" type="text" name="subjects" class="w-full h-full pl-4 border-none outline-none" placeholder="Subjects"> -->
      </div>

      <div class="formBtns mt-8 w-fit flex gap-x-8 gap-y-4">
        <ButtonSection color="bg-custom-green text-slate-50" buttonText="Edit" />
        <ButtonSection color="bg-custom-green text-slate-50" buttonText="Cancle" />
      </div>
    </form>
  </main>
</template>

<style scoped>

</style>