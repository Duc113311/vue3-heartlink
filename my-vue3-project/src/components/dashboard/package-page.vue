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
      <table class="table-auto">
        <thead>
          <tr>
            <th>Features</th>
            <th>Connect</th>
            <th>Connect +</th>
            <th>Connect GOLD</th>
            <th>Connect PLATINUM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Match. Chat. Meet.</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>
          <tr>
            <td>Unlimited likes</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>
          <tr>
            <td>Unlimited Rewinds</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>
          <tr>
            <td>Passport to any location</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>
          <tr>
            <td>Hide advertisements</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>
          <tr>
            <td>*5 Super Like per week</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>
          <tr>
            <td>*1 Free Boost a month</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>

          <tr>
            <td>See who likes you</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>
          <tr>
            <td>New Top Picks every day</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>
          <tr>
            <td>Message before matching</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>
          <tr>
            <td>Prioritised likes</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div>
    * Super Likes and Boosts available through Dating Gold and Dating Platinum
    subscriptions expire if not used
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "package-page",

  setup() {
    const tableData = [
      {
        name: "Match. Chat. Meet.",
        connectDefault: true,
        connectPlus: false,
        connectGold: false,
        connectPlatinum: true,
      },
      {
        name: "Unlimited likes ",
        connectDefault: true,
        connectPlus: false,
        connectGold: false,
        connectPlatinum: true,
      },
      {
        name: "Unlimited Rewinds",
        connectDefault: true,
        connectPlus: false,
        connectGold: false,
        connectPlatinum: true,
      },
      {
        name: "Passport to any location",
        connectDefault: true,
        connectPlus: false,
        connectGold: false,
        connectPlatinum: true,
      },
      {
        name: "Hide advertisements",
        connectDefault: true,
        connectPlus: false,
        connectGold: false,
        connectPlatinum: true,
      },
      {
        name: "*5 Super Like per week",
        connectDefault: true,
        connectPlus: false,
        connectGold: false,
        connectPlatinum: true,
      },
      {
        name: "*1 Free Boost a month",
        connectDefault: true,
        connectPlus: false,
        connectGold: false,
        connectPlatinum: true,
      },
      {
        name: "See who likes you",
        connectDefault: true,
        connectPlus: false,
        connectGold: false,
        connectPlatinum: true,
      },
      {
        name: "New Top Picks every day",
        connectDefault: true,
        connectPlus: false,
        connectGold: false,
        connectPlatinum: true,
      },
      {
        name: "Message before matching",
        connectDefault: true,
        connectPlus: false,
        connectGold: false,
        connectPlatinum: true,
      },
      {
        name: " Prioritized likes",
        connectDefault: true,
        connectPlus: false,
        connectGold: false,
        connectPlatinum: true,
      },
      {
        name: " See the likes you’ve sent over the last 7 days",
        connectDefault: true,
        connectPlus: false,
        connectGold: false,
        connectPlatinum: true,
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
