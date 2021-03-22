<template>
  <div class="h-16 bg-yellow-400">
    <div class="container mx-auto h-full flex items-center justify-between">
      <h1 class="text-xl font-bold text-gray-900">Name</h1>
      <div class="flex space-x-4 text-gray-900 font-medium">
        <router-link to="home" active-class="text-white">Home</router-link>
        <router-link to="about" active-class="text-white">About</router-link>
        <router-link to="contact" active-class="text-white">Contact</router-link>
        <router-link to="/" active-class="text-white">Logout</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Navbar'
});
</script>

<style scoped></style>
