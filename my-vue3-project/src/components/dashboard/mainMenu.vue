<template>
  <div class="w-full">
    <!-- Header -->

    <!-- Body -->
    <div class="w-full">
      <!-- Page 1 -->

      <div class="w-full">
        <div class="w-full">
          <div class="w-full flex items-center text-left">
            <div>We believe in</div>
            <div>true love</div>
          </div>
          <div class="w-full flex items-center text-left">
            <div>&</div>
          </div>
          <div class="w-full flex items-center text-left">
            <div>we want to help you</div>
            <div>find it</div>
          </div>
        </div>
        <div>
          <bh-button :nameButton="nameCreateAccount"></bh-button>
        </div>
      </div>

      <!-- Page 2 -->

      <div class="w-full text-center items-center flex justify-center">
        <div class="w-full">
          <div>So, why choose us?</div>
          <div>
            Welcome to a world of endless possibilities, where FINDING LOVE is
            made <span>effortless and exciting</span>. Our dating app is
            designed with one mission in mind: to help you discover
            <span>meaningful connections </span>
            that stand the test of time.
          </div>
          <div>
            <bh-button :nameButton="nameCreateAccount"></bh-button>
          </div>
        </div>
      </div>
      <!-- Page 3 -->

      <div class="w-full">
        <div class="w-full">
          <div class="legal">
            <div>LEGAL</div>
            <div>
              <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Cookie Policy</li>
                <li>Intellectual Property</li>
              </ul>
            </div>
          </div>
          <div class="social">
            <div>SOCIAL</div>
            <div>
              <img src="../../assets/icon/mdi_instagram.svg" width="30" />
              <img src="../../assets/icon/ic_baseline-tiktok.svg" width="30" />
              <img
                src="../../assets/icon/icon-park-solid_youtobe.svg"
                width="30"
              />
              <img src="../../assets/icon/mdi_twitter.svg" width="30" />
              <img src="../../assets/icon/ri_facebook-fill.svg" width="30" />
            </div>
          </div>
          <div class="legal">
            <div>FAQ</div>
            <div>
              <ul>
                <li>Contact</li>
              </ul>
            </div>
          </div>
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
  name: "main-menu",

  data() {
    return {
      nameCreateAccount: "Create Account",
      nameLearnMore: "Learn More",
    };
  },
});
</script>

<style lang="" scoped></style>
