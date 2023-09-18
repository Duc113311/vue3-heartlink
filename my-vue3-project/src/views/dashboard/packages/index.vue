<template>
  <div class="w-full h-full">
    <package-page></package-page>
  </div>
</template>

<script lang="ts">
import packagePage from "@/components/dashboard/package-page.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { packagePage },
  name: "PackageView",
});
</script>

<style scoped lang="scss"></style>
