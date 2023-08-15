<script setup>
  import HeroSection from '../components/HeroSection.vue';
  import Service from '../components/ServiceSection.vue';
  import ContactUs from '../components/ContactUsSection.vue';
  import Groups from '../components/GroupsSection.vue';
  import group from '../assets/images/group.jpg';
  import group2 from '../assets/images/group2.jpg';
  import group3 from '../assets/images/group3.jpg';
  import group4 from '../assets/images/group4.jpg';
  import group5 from '../assets/images/group5.jpg';

  const groups = [
    {
      name: "Group 1",
      description: "Group 1 description",
      size: 6,
      study_methods: ["Slides", "Night crawlers"],
      icon: group,
      members: ["1234", "1234", "1234"]
    },{
      name: "Group 2",
      description: "Group 2 description",
      size: 4,
      study_methods: ["Slides", "Night crawlers"],
      icon: group2,
      members: ["1234", "1234", "1234"]
    },{
      name: "Group 3",
      description: "Group 3 description",
      size: 5,
      study_methods: ["Slides", "Night crawlers"],
      icon: group3,
      members: ["1234", "1234"]
    },{
      name: "Group 4",
      description: "Group 4 description",
      size: 3,
      study_methods: ["Slides", "Night crawlers"],
      icon: group4,
      members: ["1234", "1234"]
    },{
      name: "Group 5",
      description: "Group 5 description",
      size: 2,
      study_methods: ["Slides", "Night crawlers"],
      icon: group5,
      members: ["1234"]
    },
  ]
</script>

<template>
  <main>
    <HeroSection />
    <Service />
    <Groups :groups="groups" />
    <ContactUs />
  </main>
</template>

<style scoped>
</style>
