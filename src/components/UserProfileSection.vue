<script setup>
</script>

<template>
  <main class="bg-gradient-to-b from-custom-green to-custom-dark-green min-h-screen">
    <div class="signupContainer flex flex-wrap gap-x-12 gap-y-4 items-center justify-center mt-8 pb-4">
      
      <div class="formImage w-450 h-500">
        <img class="w-full h-full object-cover" :src="signup" alt="Login Image">          
      </div>


      <div class="signup text-slate-50 bg-slate-50/30 backdrop-blur-sm rounded-md w-400 px-5 pt-8">
        <h2 class="text-center text-4xl font-bold">Create an Account</h2>
        <form class="my-8 w-full">
          
          <div class="text-slate-900 fullname my-4 w-full h-12 rounded overflow-hidden">
            <input type="text" name="fullname" class="w-full h-full px-4 border-none outline-none" placeholder="Fullname">
          </div>

          <div class="text-slate-900 email my-4 w-full h-12 rounded overflow-hidden">
            <input type="email" name="email" class="w-full h-full px-4 border-none outline-none" placeholder="Email">
          </div>

          <div class="text-slate-900 password my-4 w-full h-12 rounded overflow-hidden">
            <input type="password" name="password" class="w-full h-full px-4 border-none outline-none" placeholder="Password">
          </div>

          <div class="text-slate-900 password my-4 w-full h-12 rounded overflow-hidden">
            <input type="password" name="password" class="w-full h-full px-4 border-none outline-none" placeholder="Confirm Password">
          </div>
          
          <div class="flex flex-wrap items-center justify-between">
            <div class="rememberPassword flex items-center gap-x-2">
              <input class="" type="checkbox">
              <span>Remember Password</span>
            </div>

            <p>Forgot Password</p>
          </div>

          <div class="w-full button my-4">
            <button class="w-full bg-slate-900 py-3 rounded-lg uppercase text-slate-50 cursor-pointer">Sign up</button>
          </div>

          <p class="text-center">Already have an account? <RouterLink class="underline underline-offset-2" to="/login">Login</RouterLink></p>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>