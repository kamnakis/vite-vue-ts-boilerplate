<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />

    <router-view class="flex-1"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Navbar from '~/components/Navbar.vue'

export default defineComponent({
  name: "LDashboard",
  components: {
    Navbar
  }
});
</script>
