<template>
  <div class="w-full h-full">
    <div class="common-layout">
      <el-container>
        <el-aside width="300px" class="">
          <div class="w-full h-full p-5">
            <div class="flex justify-start items-center">
              <img
                src="../../../assets/icon/thieu-nien-1.jpg"
                class="rounded-full size-image"
              />
              <span class="text-xl font-semibold pl-3">Duc Nguyen</span>
            </div>

            <div class="option w-full mt-5">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="2">
                  <span>Feeds</span>
                </el-menu-item>
                <el-sub-menu index="1">
                  <template #title>
                    <span>Explore</span>
                  </template>
                  <el-menu-item index="1-1">Verified photos</el-menu-item>
                  <el-menu-item index="1-2">Blind Date</el-menu-item>
                  <el-menu-item index="1-2">Looking for love</el-menu-item>
                  <el-menu-item index="1-2">Let's be friend</el-menu-item>
                  <el-menu-item index="1-2">Coffee Date</el-menu-item>
                </el-sub-menu>

                <el-menu-item index="3">
                  <span>Edit Profile</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <span>Settings</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <span>Heart-Connect package</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <span>Heart-Connect Plus</span>
                </el-menu-item>
                <el-menu-item index="6">
                  <span>Heart-Connect Gold</span>
                </el-menu-item>
                <el-menu-item index="7">
                  <span>Heart-Connect Platinum</span>
                </el-menu-item>
              </el-menu>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-header>
            <div class="flex w-full justify-center items-center p-5">Feeds</div>
          </el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IntroductionView",

  setup() {
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };

    return { handleOpen, handleClose };
  },
});
</script>

<style scoped lang="scss">
.size-image {
  width: 50px;
  height: 50px;
}
</style>
