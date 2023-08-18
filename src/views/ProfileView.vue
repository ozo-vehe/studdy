<script setup>
  import Navbar from '../components/NavbarSection.vue';
  import Group from '../components/GroupSection.vue';
</script>

<template>
  <main class="min-h-screen">
    <Navbar />
    <div class="profileContainer min-h-screen flex flex-wrap gap-x-12 gap-y-8 items-start px-12 justify-center">
      <div class="profile w-350 min-h-screen border-r pt-12">
        <div class="profileImage">
          <img src="https://via.placeholder.com/250" alt="profile image" />
        </div>
        <div class="profileInfo">
          <h3>John Doe</h3>
          <p>Study Method</p>
          <p>Subjects</p>
          <p>Education Level</p>
          <p>Groups</p>
        </div>
      </div>

      <div class="userGroups w-350 min-h-screen border-r pt-12">
        <h2>Groups</h2>
        <!-- <Group /> -->
      </div>

      <div class="userSchedule w-350 min-h-screen border-r pt-12">
        <h2>Today's Schedule</h2>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>