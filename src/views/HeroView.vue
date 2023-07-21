<script setup>
  import hero from '../assets/images/hero.png'
</script>

<template>
  <main class="bg-gradient-to-b from-custom-green to-custom-dark-green h-screen">
    <div class="heroSection flex items-center justify-center gap-x-15 gap-y-4">
      <div class="header w-450 text-slate-50">
        <h1 class="text-7xl font-bold">Experience excellence with us</h1>
        <p class="my-4">Your buddy in Studdy</p>

        <button class="uppercase cursor-pointer bg-slate-900 px-8 py-3 rounded-3xl">start here</button>
      </div>

      <div class="headerImage w-500 h-500">
        <img class="w-full h-full object-cover" :src="hero" alt="Hero Image">
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>