<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",

  setup() {
    return;
  },
});
</script>

<style lang="scss">
body {
  font-family: "Roboto", sans-serif;
  letter-spacing: 1.5px;

  position: fixed;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Roboto", sans-serif;
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
