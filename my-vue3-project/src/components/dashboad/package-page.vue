<template>
  <div class="w-full">
    <div class="w-full">
      <div>Subscription tiers</div>
      <div>
        Upgrade to Plus, Gold or Platinum for an enhanced Dating® experience.
      </div>
    </div>
    <div class="w-full">
      <div class="card-connect">
        <div class="flex items-center">
          <img src="../../assets/icon/logo.svg" width="30" alt="" />
          <div>Connect+</div>
        </div>
        <div class="">
          <ul>
            <li>Unlimited likes</li>
            <li>Unlimited Rewinds</li>
            <li>Passport to any location</li>
            <li>Hide advertisements</li>
          </ul>
        </div>
      </div>

      <div class="card-connect">
        <div class="flex items-center">
          <img src="../../assets/icon/logo.svg" width="30" alt="" />
          <div>Connect</div>
          <div>Gold</div>
        </div>
        <div class="">
          <ul>
            <li>See who likes you</li>
            <li>New Top Picks every day</li>
            <li>5 Super Likes per week</li>
            <li>1 Free Boost a month</li>
            <li>And everything you love from <span>Dating Plus! </span></li>
          </ul>
        </div>
      </div>

      <div class="card-connect">
        <div class="flex items-center">
          <img src="../../assets/icon/logo.svg" width="30" alt="" />
          <div>Connect</div>
          <div>PLATINUM</div>
        </div>
        <div class="">
          <ul>
            <li>Message before matching</li>
            <li>Prioritised likes</li>
            <li>See the likes you’ve sent over the last 7 days</li>
            <li>And everything you love from <span>Dating Gold</span>!</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div>Comparison Subscription tiers</div>
    <!-- table -->
    <div class="w-full">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="features" label="Features" width="180" />
        <el-table-column prop="connect" label="Connect" width="180" />
        <el-table-column prop="connect" label="Connect" width="180" />
        <el-table-column prop="connect" label="Connect" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"; 

export default defineComponent({
  name: "package-page",

  setup() {
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];
    return { tableData };
  },
  data() {
    return {};
  },

  methods: {},
});
</script>

<style lang="scss" scoped></style>
