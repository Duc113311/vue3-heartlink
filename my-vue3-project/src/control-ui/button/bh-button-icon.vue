<template>
  <el-button
    size="large"
    class="text-black pl-8 pr-8 pt-4 pb-4 font-semibold text-button-default"
    :style="{ fontSize: isNumberSize + 'px', fontWeight: isNumberWeight }"
    round
  >
    <img :src="imgUrl" alt="" />

    {{ isNameButton }}</el-button
  >
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "bh-button",

  props: ["nameButton", "numberSize", "numberWeight"],
  data() {
    return {};
  },

  computed: {
    isNameButton() {
      return this.nameButton ? this.nameButton : "Default";
    },

    isNumberSize() {
      return this.numberSize ? this.numberSize : "20";
    },

    isNumberWeight() {
      return this.numberWeight ? this.numberWeight : "500";
    },
  },

  methods: {},
});
</script>

<style lang="scss" scoped>
.text-button-default {
  color: #000000;
}
</style>
