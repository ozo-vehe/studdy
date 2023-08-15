<script setup>
  import signupImage from '../assets/images/signup.png';
  import { ref } from 'vue';
  import { useUsers } from '../store/users';
  import { useRouter } from 'vue-router';

  // Import components
  import ButtonSection from '../components/ButtonSection.vue';
  import ErrorAlert from '../components/alerts/ErrorAlert.vue';
  import Navbar from '../components/NavbarSection.vue';

  
  // Define router
  const router = useRouter();

  // Signup Data
  const email = ref(null);
  const password = ref(null);
  const cPassword = ref(null);
  const fullname = ref(null);
  const isSame = ref(true);
  const errorMessage = ref(null);
  
  // Store variables
  const userStore = useUsers();
  const { signup } = userStore

  // Signup function
  const userSignup = async(e) => {
    e.preventDefault();
    try{
      if(password.value == cPassword.value) {
        isSame.value = true;
        const userDetails = {
          email: email.value,
          password: password.value,
          fullname: fullname.value
        }
        const userId = await signup(userDetails);
        console.log(userId);

        // Redirect to profile page
        router.push({name: "profile", params: { id: userId }})
      }
      else {
        isSame.value = false;
        errorMessage.value = "Password not the same"
        return new Error("Password not the same");
      }
    } catch(err) {
      errorMessage.value = err;
    }
  }

</script>

<template>
  <main class="min-h-screen">
    <Navbar />
    <div class="signupContainer flex flex-wrap gap-x-12 gap-y-4 items-center justify-center pt-8 pb-4">
      
      <div class="formImage w-450 h-500">
        <img class="w-full h-full object-contain" :src="signupImage" alt="Login Image">          
      </div>


      <div class="signup text-slate-800 bg-slate-50 backdrop-blur-sm rounded-md w-400 px-5 pt-8">
        <h2 class="text-center text-4xl text-custom-dark-green font-bold">Create an Account</h2>
        <form class="my-8 w-full">
          
          <div class="text-slate-800 fullname my-4 w-full h-12 rounded overflow-hidden">
            <input v-model="fullname" type="text" name="fullname" class="w-full h-full px-4 border-none outline-none" placeholder="Fullname">
          </div>

          <div class="text-slate-800 email my-4 w-full h-12 rounded overflow-hidden">
            <input v-model="email" type="email" name="email" class="w-full h-full px-4 border-none outline-none" placeholder="Email">
          </div>

          <div class="text-slate-800 password my-4 w-full h-12 rounded overflow-hidden">
            <input v-model="password" type="password" name="password" class="w-full h-full px-4 border-none outline-none" placeholder="Password">
          </div>

          <div class="text-slate-800 password my-4 w-full h-12 rounded overflow-hidden">
            <input v-model="cPassword" type="password" name="password" class="w-full h-full px-4 border-none outline-none" placeholder="Confirm Password">
          </div>
          
          <div class="flex flex-wrap items-center justify-between">
            <div class="rememberPassword flex items-center gap-x-2">
              <input class="" type="checkbox">
              <span>Remember Password</span>
            </div>

            <p class="text-custom-dark-green cursor-pointer">Forgot Password</p>
          </div>

          <div class="w-full button my-4">
            <ButtonSection @click="userSignup" buttonText="Sign up" color="w-full bg-custom-dark-green py-2 rounded-lg capitalize text-slate-50" />
          </div>

          <p class="text-center">Already have an account? <RouterLink class="underline underline-offset-2 text-custom-dark-green" to="/login">Login</RouterLink></p>
        </form>
      </div>
    </div>

    <ErrorAlert :message="errorMessage" v-if="!isSame" />
  </main>
</template>

<style scoped>
</style>