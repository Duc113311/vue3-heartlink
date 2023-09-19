<template>
  <div class="w-full h-full">
    <main-menu></main-menu>
  </div>
</template>

<script lang="ts">
import mainMenu from "@/components/dashboard/mainMenu.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { mainMenu },
  name: "IntroductionView",
});
</script>

<style scoped lang="scss"></style>
