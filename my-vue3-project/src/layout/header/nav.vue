<template>
  <div class="w-full h=full">
    <header :class="{ 'scrolled-nav': scrollPosition }">
      <nav>
        <div class="branding">
          <img src="../../assets/icon/logo_txt.svg" alt="" srcset="" />
        </div>
        <ul v-show="!mobile" class="navigation">
          <li>About</li>
          <li>Package</li>
          <li>Download</li>
          <li>Features</li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "nav-page",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
