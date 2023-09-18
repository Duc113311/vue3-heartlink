<template>
  <div class="w-full">
    <!--  -->
    <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
      <div class="text-center">
        <img src="../../assets/icon/logo.svg" width="30" alt="" srcset="" />
        <div>Create Account</div>

        <div>
          By clicking Log in, you agree to out <span>Terms</span>. Learn how we
          process your data in our <span>Privacy Policy</span> and
          <span>Cookie Policy</span>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "bh-draggable",
  setup() {
    const dialogVisible = ref(false);

    return { dialogVisible };
  },
});
</script>

<style lang="scss" scoped></style>
