<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="bg-slate-800 p-12">
    <section class="flex gap-x-2 gap-y-4 flex-wrap items-center justify-center">
      <div class="logo w-200">
        <RouterLink to="/">
          <p class="border-l-4 border-slate-50 pl-2 text-3xl font-bold text-slate-50">Studdy</p>
        </RouterLink>
      </div>

      <div class="socialLinks w-200 flex flex-wrap items-center justify-center gap-4">
        <div class="bg-slate-50 rounded-full w-8 h-8 p-2">
          <RouterLink to="#">
            <img class="w-full h-full object-contain" src="https://img.icons8.com/ios/50/4fac6b/twitter--v1.png" alt="twitter--v1"/>
          </RouterLink>
        </div>

        <div class="bg-slate-50 rounded-full w-8 h-8 p-2">
          <RouterLink to="#">
            <img class="w-full h-full object-contain" src="https://img.icons8.com/ios/50/4fac6b/linkedin-2--v1.png" alt="linkedin-2--v1"/>
          </RouterLink>
        </div>

        <div class="bg-slate-50 rounded-full w-8 h-8 p-2">
          <RouterLink to="#">
            <img class="w-full h-full object-contain" src="https://img.icons8.com/ios/50/4fac6b/instagram-new--v1.png" alt="instagram-new--v1"/>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
</style>