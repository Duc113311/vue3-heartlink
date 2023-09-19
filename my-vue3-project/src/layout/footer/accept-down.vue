<template>
  <div
    class="absolute bg-slate-100 bottom-0 left-0 w-full items-center justify-center flex"
  >
    <div class="w-full pl-64 pr-64 pt-5 pb-5">
      <div class="text-left">
        We value your privacy. We and our partners use trackers to measure the
        audience of our website and to provide you with offers and improve our
        own Dating marketing operations.<span class="decoration-1"
          >More info on cookies and providers we use.</span
        >
        You can withdraw your consent at any time in your settings.
      </div>

      <div class="flex justify-between items-center mt-10">
        <div>
          <bh-button :nameButton="namePesonalise"></bh-button>
        </div>
        <div class="flex items-center justify-between">
          <bh-button
            :nameButton="nameAccept"
            :numberSize="20"
            :numberWeight="500"
          ></bh-button>
          <bh-button
            :nameButton="nameDecline"
            :numberSize="20"
            :numberWeight="500"
          ></bh-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bhButton from "@/control-ui/button/bh-button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { bhButton },
  name: "accept-down",

  setup() {
    return {};
  },
  data() {
    return {
      namePesonalise: "Pesonalise my choices",
      nameAccept: "I accept",
      nameDecline: "I decline",
    };
  },

  methods: {},
});
</script>

<style lang="scss" scoped></style>
