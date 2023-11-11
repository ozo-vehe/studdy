<script setup>
import { ref } from 'vue';
import loginImage from '../assets/images/login.png';
import { useUsers } from '../store/users';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

// Import components
import Navbar from '../components/NavbarSection.vue';
import Loader from '../components/Loader.vue';
import ErrorAlert from '../components/alerts/ErrorAlert.vue';

// Read functions from the store
const userStore = useUsers();
const { userId } = storeToRefs(userStore);
const { login } = userStore;

// Define router
const router = useRouter();

// Refs data from login form
const email = ref(null);
const password = ref(null);
let loading = ref(false);
let error = ref(false);

// Sending data to the store
const userLogin = async (event) => {
  event.preventDefault();
  // Set loading state
  loading.value = true;

  const userDetails = {
    email: email.value,
    password: password.value
  }

  try {
    // Send login details to the store
    await login(userDetails);

    // Reset input field
    email.value = null;
    password.value = null;

    // Redirect to profile page
    router.push({ name: "profile", params: { id: userId.value } });

  } catch (err) {
    error.value = true;
    console.log(error)
    setTimeout(() => {
      error.value = false;
    }, 5000);
    console.log(error)
  } finally {
    // Reset loading state
    loading.value = false;
  }
}
</script>

<template>
  <main class="min-h-screen pb-8">
    <ErrorAlert v-if="error" message="Invalid email or password" />
    <Navbar />
    <div class="loginContainer flex flex-wrap gap-x-12 gap-y-4 items-center justify-center py-8">
      <div class="formImage w-450 h-500">
        <img class="w-full h-full object-contain" :src="loginImage" alt="Login Image">
      </div>


      <div class="login bg-slate-50 shadow-sm rounded-md w-400 px-5 py-8">
        <h2 class="text-center text-custom-dark-green text-4xl font-bold">Welcome Back</h2>
        <form class="my-8 w-full">
          <div class="text-slate-900 email my-4 w-full h-12 rounded overflow-hidden">
            <input v-model="email" type="email" name="email" class="w-full h-full pl-4 border-none outline-none"
              placeholder="Email">
          </div>

          <div class="text-slate-900 password my-4 w-full h-12 rounded overflow-hidden">
            <input v-model="password" type="password" name="password" class="w-full h-full pl-4 border-none outline-none"
              placeholder="Password">
          </div>

          <div class="flex flex-wrap items-center justify-between">
            <div class="rememberPassword flex items-center gap-x-2">
              <input class="" type="checkbox">
              <span>Remember Password</span>
            </div>

            <p class="text-custom-dark-green cursor-pointer">Forgot Password</p>
          </div>

          <div class="w-full text-center button my-8">
            <button @click="userLogin"
              class="w-full bg-custom-dark-green h-12 py-2 rounded-lg capitalize text-slate-50 cursor-pointer flex items-center justify-center gap-2">
              <Loader v-if="loading" />
              <span v-else>Login</span>
            </button>
          </div>

          <p class="text-center">Don't have an account? <RouterLink
              class="text-custom-dark-green underline underline-offset-2" to="/signup">Sign Up</RouterLink>
          </p>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped></style>