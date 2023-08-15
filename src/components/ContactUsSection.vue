<script setup>
  import Button from './ButtonSection.vue';
  import { ref } from 'vue';

  // Loading State
  const loading = ref(false);

  // Contact Form Data
  const form = ref({
    name: null,
    email: null,
    message: null
  });

  // Submit Form
  const submitForm = () => {
    loading.value = true;
    try {
      // Send Form Data to Firebase

      // Log Form Data
      console.log(form.value);
    } catch (error) {
      console.log(error);
    } finally {
      // Reset Form
      form.value.name = null;
      form.value.email = null;
      form.value.message = null;
      loading.value = false;
    }
  }
</script>

<template>
  <main class="text-custom-dark-green p-12 flex flex-col items-center justify-start">
    <h2 class="text-3xl font-bold text-center mb-4">Contact Us</h2>

    <form @submit.prevent="submitForm" class="text-slate-800 w-350 border mt-4 px-4 bg-slate-50 rounded-lg">
      <div class="border border-slate-300 my-4 h-10 w-full rounded overflow-hidden">
        <input v-model.lazy="form.name" type="name" name="name" class="name pl-2 w-full h-full border-none outline-none" placeholder="Name" required>
      </div>
      <div class="border border-slate-300 my-4 h-10 w-full rounded overflow-hidden">
        <input v-model.lazy="form.email" type="email" name="email" class="email pl-2 w-full h-full border-none outline-none" placeholder="Email" required>
      </div>
      <div class="border border-slate-300 my-4 h-28 w-full rounded overflow-hidden">
        <textarea v-model.trim="form.message" name="message" class="message pl-2 pt-1 w-full h-full outline-none border-none" placeholder="Message" required></textarea>
      </div>

      <div class="text-center my-8">
        <Button v-if="!loading" buttonText="Submit" color="bg-custom-dark-green text-slate-50" />
        <Button v-else buttonText="Sending, please wait..." color="bg-custom-dark-green text-slate-50" />
      </div>
    </form>
  </main>
</template>

<style scoped>
</style>