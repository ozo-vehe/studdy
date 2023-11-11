<script setup>
import signupImage from '../assets/images/signup.png';
import { ref } from 'vue';
import { useUsers } from '../store/users';
import { useRouter } from 'vue-router';
import Multiselect from '@vueform/multiselect';

import '@vueform/multiselect/themes/default.css';

// Import components
import ButtonSection from '../components/ButtonSection.vue';
import ErrorAlert from '../components/alerts/ErrorAlert.vue';
import Navbar from '../components/NavbarSection.vue';

// Loading state
const loading = ref(false);

// Define router
const router = useRouter();

// Signup Component Data
const email = ref(null);
const password = ref(null);
const cPassword = ref(null);
const fullname = ref(null);
const level = ref(null);
const studyMethod = ref(null);
let subjects = ref([]);
const profileImage = ref("https://via.placeholder.com/250");
const isSame = ref(true);
const errorMessage = ref(null);
const userImage = ref("https://via.placeholder.com/250");
const userImageFile = ref(null);

// Multiselect
const options = [
  { value: "anatomy", label: "Anatomy" },
  { value: "embryology", label: "Embryology" },
  { value: "medical biochemistry", label: "Medical Biochemistry" },
  { value: "physiology", label: "Physiology" },
  { value: "histology", label: "Histology" },
  { value: "anatomic pathology", label: "Anatomic Pathology" },
  { value: "medical microbiology", label: "Medical Microbiology" },
  { value: "pharmacology", label: "Pharmacology" },
  { value: "chemical pathology", label: "Chemical Pathology" },
  { value: "hematology", label: "Hematology" },
]

const hide = ref(false);

// Store variables
const userStore = useUsers();
const { signup, uploadImage } = userStore

// Signup function
const userSignup = async (e) => {
  e.preventDefault();
  console.log("Sending...");
  loading.value = true;
  // Check if password is the same
  try {
    if (password.value !== cPassword.value) {
      console.log("Not same");
      isSame.value = false;
      errorMessage.value = "Password not the same"
      return new Error("Password not the same");
    }
    // Check if input fields are empty
    if (email.value !== null && fullname.value !== null) {
      // Set isSame to true
      isSame.value = true;
      console.log("Same");

      // Check if the user chose a profile image
      if (userImageFile.value !== null) {
        // Save the image to firebase and get image url
        profileImage.value = await uploadImage(userImageFile.value);
      }
      // Store user details
      const userDetails = {
        image: profileImage.value,
        email: email.value,
        password: password.value,
        fullname: fullname.value,
        level: level.value,
        studyMethod: studyMethod.value,
        subjects: subjects.value,
      }
      console.log(userDetails);
      // Signup user
      const userId = await signup(userDetails);
      console.log(userId);

      // Redirect to profile page
      router.push({ name: "profile", params: { id: userId } })
    }
    // If input fields are empty
    else {
      isSame.value = false;
      setTimeout(() => {
        isSame.value = true;
      }, 5000);
      errorMessage.value = "Input fields are empty"
      return new Error("Input fields are empty");
    }
  } catch (err) {
    errorMessage.value = err;
  } finally {
    loading.value = false;
  }
}

// Remove item from the value array
const removeSubject = (item) => {
  value.value = value.value.filter((subject) => subject != item);
}

// Get user's image
const getUserImage = (e) => {
  const file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    userImage.value = e.target.result;
  }
  reader.readAsDataURL(file);
  // Set profile image to image uploaded
  userImageFile.value = file;
}

// Rotate Signup form
const hideSignup = (e) => {
  e.preventDefault();
  hide.value = !hide.value;
}

</script>

<template>
  <main class="min-h-screen pb-8">
    <Navbar />
    <div class="signupContainer flex flex-wrap gap-x-12 gap-y-4 items-center justify-center py-8">

      <div class="formImage w-450 h-500">
        <img class="w-full h-full object-contain" :src="signupImage" alt="Login Image">
      </div>

      <div class="signupForm w-400 h-fit flex flex-wrap items-center justify-center rounded-md">
        <div v-if="!hide"
          class="h-full signup text-slate-800 bg-slate-50 backdrop-blur-sm rounded-md w-400 px-5 pt-8 transition-all duration-1000">
          <h2 class="text-center text-4xl text-custom-dark-green font-bold">Create an Account</h2>
          <form class="my-8 w-full">
            <div class="text-slate-800 fullname my-4 w-full h-12 rounded overflow-hidden">
              <input v-model="fullname" type="text" name="fullname" class="w-full h-full px-4 border-none outline-none"
                placeholder="Fullname">
            </div>

            <div class="text-slate-800 email my-4 w-full h-12 rounded overflow-hidden">
              <input v-model="email" type="email" name="email" class="w-full h-full px-4 border-none outline-none"
                placeholder="Email">
            </div>

            <div class="text-slate-800 password my-4 w-full h-12 rounded overflow-hidden">
              <input v-model="password" type="password" name="password"
                class="w-full h-full px-4 border-none outline-none" placeholder="Password">
            </div>

            <div class="text-slate-800 password my-4 w-full h-12 rounded overflow-hidden">
              <input v-model="cPassword" type="password" name="password"
                class="w-full h-full px-4 border-none outline-none" placeholder="Confirm Password">
            </div>

            <div class="flex flex-wrap items-center justify-between">
              <div class="rememberPassword flex items-center gap-x-2">
                <input class="" type="checkbox">
                <span>Remember Password</span>
              </div>

              <p class="text-custom-dark-green cursor-pointer">Forgot Password</p>
            </div>

            <div class="w-full button h-12 my-4">
              <ButtonSection @click="hideSignup" buttonText="Next"
                color="w-full h-full bg-custom-dark-green py-2 rounded-lg capitalize text-slate-50" />
            </div>

            <p class="text-center">Already have an account? <RouterLink
                class="underline underline-offset-2 text-custom-dark-green" to="/login">Login</RouterLink>
            </p>
          </form>

        </div>

        <div v-else
          class="h-full profile text-slate-800 bg-slate-50 backdrop-blur-sm rounded-md w-400 px-5 transition-all duration-1000">
          <form class="mt-4 mb-8 w-full">
            <div class="flex flex-col items-center justify-center">
              <div
                class="text-slate-800 flex items-center justify-center bg-white border w-1/2 h-44 m-auto rounded-full overflow-hidden">
                <img class="w-full h-full object-cover" v-if="userImage" :src="userImage" alt="User image">
                <input @change="getUserImage" class="hidden" type="file" accept="image/png, image/jpeg, image/jpg"
                  id="image">
              </div>
              <label class="cursor-pointer mt-4 mb-2 bg-white text-slate-800 px-3 py-1 border border-slate-200 rounded"
                for="image">Select image</label>
            </div>

            <label for="level" class="text-slate-800 px-1">Select Level: </label>
            <div class="text-slate-800 bg-white px-4 border fullname mb-4 w-full h-12 rounded overflow-hidden">
              <select v-model="level" id="level" class="w-full h-full border-none outline-none bg-none">
                <option value="">Select Level</option>
                <option value="100">100 Level</option>
                <option value="200">200 Level</option>
                <option value="300">300 Level</option>
                <option value="400">400 Level</option>
                <option value="400">500 Level</option>
                <option value="400">600 Level</option>
              </select>
            </div>

            <label for="studyMethod" class="text-slate-800 px-1">Study Method:</label>
            <div class="text-slate-800 bg-white px-4 border fullname mb-4 w-full h-12 rounded overflow-hidden">
              <select id="studyMethod" v-model="studyMethod" class="w-full h-full border-none outline-none bg-none">
                <option value="active discussion">Active Discussion</option>
                <option value="practice questions">Practice Questions</option>
                <option value="visual learning">Visual Learning</option>
                <option value="virtual study">Virtual Study</option>
                <option value="flashcards">Flashcards</option>
              </select>
            </div>

            <div class="flex text-slate-800 bg-white border fullname mt-4 w-full h-12 rounded relative">
              <Multiselect id="multiselect" class="multiselect-green" v-model="subjects" mode="multiple"
                :options="options" />
              <div class="absolute flex items-center rounded-l justify-start pl-4 top-0 left-0 h-full w-fit">
                <label for="multiselect">Choose your subjects</label>
              </div>
            </div>

            <div v-if="subjects.length >= 1"
              class="flex flex-wrap gap-2 items-center justify-start text-slate-800 mt-2 mb-5 w-full h-fit">
              <p class="bg-white border border-slate-200 text-sm px-2 py-1 rounded-sm flex items-center gap-2 justify-between"
                v-for="subject in subjects"><span class="text-slate-800 capitalize">{{ subject }}</span> <span
                  class="lowercase cursor-pointer text-custom-dark-green" @click="removeSubject(item)">x</span></p>
            </div>

            <div class="w-full flex items-center justify-center gap-4 button my-4">
              <button class="w-full h-12 rounded-lg" v-if="loading">
                <span class="w-4 h-4 inline-block rounded-full animate-spin border-r-2 border-b-2 border-l-2 border-custom-dark-green">
                </span>
              </button>
              <template v-else>
                <ButtonSection @click="userSignup" buttonText="Sign up"
                  color="w-1/2 bg-custom-dark-green py-2 rounded-lg capitalize text-slate-50" />
                <ButtonSection @click="hideSignup" buttonText="Back"
                  color="w-1/2 text-custom-dark-green py-2 rounded-lg capitalize bg-white border" />
            </template>
          </div>
        </form>
      </div>
    </div>
  </div>

  <ErrorAlert :message="errorMessage" v-if="!isSame" />
</main></template>

<style scoped>.multiselect-green {
  --ms-tag-bg: none;
  --ms-tag-color: none;
  --ms-border-color: none;
}</style>