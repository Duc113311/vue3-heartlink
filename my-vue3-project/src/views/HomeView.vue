<template>
  <div class="w-full h-full">
    <head-title></head-title>
    <!-- Body -->

    <main-menu></main-menu>
    <!-- Footer -->
    <footer-page></footer-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import headTitle from "@/layout/header/head-title.vue";
import MainMenu from "@/components/dashboad/mainMenu.vue";
import FooterPage from "@/layout/footer/footer-page.vue";
export default defineComponent({
  components: { headTitle, MainMenu, FooterPage },
  name: "HomeView",
});
</script>

<style scoped lang="scss"></style>
