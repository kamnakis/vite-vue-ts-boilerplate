<template>
  <div class="h-screen bg-yellow-50 flex items-center justify-center">
    <button
      class="px-4 py-2 rounded-md shadow-lg bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-white font-bold focus:outline-none transition-colors"
      @click="goToHome()"
    >
      EXPLORE THE APP
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Landing",
  setup () {
    const router = useRouter()

    const goToHome = () => {
      router.push('/home')
    }

    return {
      goToHome
    }
  }
});
</script>
