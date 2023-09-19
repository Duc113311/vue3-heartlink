<template>
  <div
    class="bg-gray-900 text-gray-100 py-3.5 px-8 shadow md:flex justify-between items-center"
  >
    <div class="flex items-center cursor-pointer h-full">
      <img
        src="../../assets/icon/logo_txt.svg"
        width="320"
        alt=""
        class="mr-2"
      />

      <div class="md:flex pt-4" :class="[open ? 'block' : 'hidden']">
        <div class="flex items-center">
          <img
            class="mr-1"
            src="../../assets/icon/ic_language.svg"
            width="20"
            alt=""
          />
          <div>Language</div>
        </div>
      </div>
    </div>

    <div
      class="absolute md:hidden right-6 top-7 cursor-pointer"
      @click="menuOpen()"
    >
      <img v-if="open" src="../../assets/icon/ic_cancel.svg" width="20" />

      <img v-else src="../../assets/icon/ic_bi_filter_left.svg" width="30" />
    </div>

    <ul
      class="md:flex md:items-center mr-16 md:px-0 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full menu-mobile duration-700 ease-in"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li
        class="md:mx-6 font-medium text-xl md:my-0 my-6 ml-8 md:ml-0"
        v-for="(link, index) in links"
        :key="index"
      >
        <a :href="link.link" class="text-xl hover:text-green-500">{{
          link.name
        }}</a>
      </li>
      <bh-button
        class="ml-8 md:ml-0"
        :nameButton="nameLogIn"
        :numberSize="numberSize"
        :numberWeight="600"
      ></bh-button>
    </ul>
  </div>
</template>

<script lang="ts">
import bhButton from "@/control-ui/button/bh-button.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { bhButton },
  name: "head-title",

  setup() {
    let open = ref(false);
    let links = [
      { name: "About", link: "#" },
      { name: "Packages", link: "http://localhost:8080/package" },
      { name: "Download", link: "#" },
      { name: "Features", link: "#" },
    ];

    function menuOpen() {
      open.value = !open.value;
    }
    return { links, open, menuOpen };
  },
  data() {
    return {
      nameLogIn: "Log in",
      numberSize: 20,
    };
  },

  methods: {},
});
</script>

<style lang="scss" scoped>
.menu-mobile {
  top: 4.6rem;
}
</style>
