flw<script setup>
  import hero from '../assets/images/hero.png'
  import Navbar from './NavbarSection.vue';
</script>

<template>
  <main class="custom-height homepage">
    <Navbar />
    <div class="heroSection pt-16 flex flex-wrap items-center justify-center gap-x-15 gap-y-4 custom-height">
      <div class="header w-450 text-slate-800 h-400">
        <h1 class="text-5xl font-bold">What is The Best Method For You</h1>
        <p class="my-4">
          Join Studdy today and embark on a rewarding academic 
          journey with like-minded students. Together, let's 
          unlock your full potential!. Experience excellence 
          with us, your buddy in Studdy
        </p>

        <button class="btn bg-slate-800 text-slate-50 capitalize cursor-pointer mt-8 px-8 py-3 rounded-md">start here</button>
      </div>

      <div class="headerImage w-500 h-500">
        <img class="w-full h-full object-contain" :src="hero" alt="Hero Image">
      </div>
    </div>
  </main>
</template>

<style scoped>
  .homepage {
    background: linear-gradient(180deg, #b5f7c9 0%, #ffffff 100%);
  }
  @media screen and (max-width: 768px) {
    .heroSection {
      padding-left: 5%;
      padding-right: 5%;
    }
    .header {
      order: 1;
    }
  }
</style>
