<template>
  <div class="w-full">
    <div class="w-full items-center text-center">
      <div>So, why choose us?</div>
      <div>
        Welcome to a world of endless possibilities, where FINDING LOVE is made
        <span>effortless and exciting</span>. Our dating app is designed with
        one mission in mind: to help you discover
        <span>meaningful connections</span> that stand the test of time.
      </div>
    </div>

    <div class="w-full">
      <el-space direction="vertical">
        <el-card v-for="i in 2" :key="i" class="box-card" style="width: 250px">
          <template #header>
            <div class="card-header">
              <span>Card name</span>
              <el-button class="button" text>Operation button</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "List item " + o }}
          </div>
        </el-card>
      </el-space>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-page",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
