<template>
  <head-title></head-title>
  <div class="w-full h-full overflow-scroll"><router-view /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import headTitle from "./layout/header/head-title.vue";
export default defineComponent({
  components: { headTitle },
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
