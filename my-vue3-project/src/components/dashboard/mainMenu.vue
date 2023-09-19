<template>
  <div class="w-full h-full">
    <!-- Header -->

    <!-- Body -->
    <div class="w-full h-full">
      <!-- Page 1 -->

      <div
        class="w-full p-28 flex justify-center items-center text-center bg-slate-500"
      >
        <div class="w-full pl-96 pr-96">
          <div class="w-full text-center">
            <div
              class="w-full flex items-center text-left justify-start text-title pl-12"
            >
              <div>
                We believe in
                <span class="text-red-700 underline decoration-2"
                  >true love</span
                >
              </div>
            </div>
            <div
              class="w-full flex items-center text-center justify-center text-big-title"
            >
              <div>&</div>
            </div>
            <div
              class="w-full flex items-center text-right justify-end text-title"
            >
              <div>
                we want to help you
                <span class="text-red-700 underline decoration-2">find it</span>
              </div>
            </div>
          </div>
          <div class="pt-12">
            <bh-button :nameButton="nameCreateAccount"></bh-button>
          </div>
        </div>
      </div>

      <!-- Page 2 -->

      <div class="w-full text-center items-center flex justify-center p-5">
        <div class="w-full pl-96 pr-96">
          <div class="text-title">So, why choose us?</div>
          <div class="text-small-title pt-6">
            Welcome to a world of endless possibilities, where FINDING LOVE is
            made <span class="text-red-700">effortless and exciting</span>. Our
            dating app is designed with one mission in mind: to help you
            discover
            <span class="text-red-700">meaningful connections </span>
            that stand the test of time.
          </div>
          <div class="pt-12">
            <bh-button :nameButton="nameLearnMore"></bh-button>
          </div>
        </div>
      </div>
      <!-- Page 3 -->

      <div class="w-full flex justify-center items-center pl-24 pr-24">
        <div
          class="w-full flex gap-8 justify-start border-b-2 border-t-2 pt-5 pb-5"
        >
          <div class="legal">
            <div class="font-semibold">LEGAL</div>
            <div class="pt-3">
              <ul class="leading-8">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Cookie Policy</li>
                <li>Intellectual Property</li>
              </ul>
            </div>
          </div>
          <div class="social">
            <div class="font-semibold">SOCIAL</div>
            <div class="grid grid-cols-4 gap-3 pt-3">
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
            <div class="font-semibold">FAQ</div>
            <div class="pt-3">
              <ul>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-5 pl-24 pr-24">
        <footer-page></footer-page>
      </div>
    </div>
  </div>

  <div class="w-full absolute h-full flex justify-center top-40 form-t">
    <div class="absolute dialog-login bg-slate-300">
      <div class="w-full text-center p-5">
        <div class="w-full text-center flex justify-center items-center">
          <img src="../../assets/icon/logo.svg" width="70" alt="" />
        </div>
        <div class="text-2xl mt-3">Create Account</div>
        <div class="pl-5 pr-5 mt-3 text-sm">
          By clicking Log in, you agree to our
          <span class="underline decoration-2 text-blue-500 text-sm">Terms</span
          >. Learn how we process your data in our
          <span class="underline decoration-2 text-blue-500 text-sm"
            >Privacy Policy</span
          >
          and
          <span>Cookie Policy</span>
        </div>
        <div class="w-full grid gap-3 mt-5">
          <div class="flex items-center relative action-btn">
            <div class="absolute">
              <img
                src="../../assets/icon/flat-color-icons_google.svg"
                width="30"
                alt=""
              />
            </div>
            <span class="w-full text-center">Continue with Google</span>
          </div>
          <div class="flex items-center relative action-btn">
            <div class="absolute">
              <img
                src="../../assets/icon/ic_baseline-facebook.svg"
                width="30"
                alt=""
              />
            </div>
            <span class="w-full text-center">Log in with Facebook</span>
          </div>
          <div class="flex items-center relative action-btn">
            <div class="absolute">
              <img
                src="../../assets/icon/solar_phone-bold.svg"
                width="30"
                alt=""
              />
            </div>
            <span class="w-full text-center">Log in with phone number</span>
          </div>
        </div>
        <div
          class="mt-5 underline decoration-2 text-blue-500 text-sm font-semibold"
        >
          Trouble Logging In?
        </div>
        <div class="mt-5">Get the app!</div>
        <div class="flex justify-center w-full mt-5">
          <div class="flex items-center gap-3">
            <img
              src="../../assets/icon/ic_download_app.svg"
              width="140"
              height="37"
              alt=""
            />
            <img
              src="../../assets/icon/ic_download_google_play.svg"
              width="140"
              height="37"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <accept-down></accept-down>
</template>

<script>
import bhButton from "@/control-ui/button/bh-button.vue";
import AcceptDown from "@/layout/footer/accept-down.vue";
import FooterPage from "@/layout/footer/footer-page.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { bhButton, FooterPage, AcceptDown },
  name: "main-menu",

  data() {
    return {
      nameCreateAccount: "Create Account",
      nameLearnMore: "Learn More",
    };
  },
});
</script>

<style lang="scss" scoped>
.text-small-title {
  font-size: 24px;
  font-weight: 600;
}
.text-title {
  font-size: 36px;
  font-weight: 600;
}
.text-big-title {
  font-size: 64px;
  font-weight: 600;
}

.dialog-login {
  top: 10 0px;
  width: 400px;
  height: 550px;
  background-color: #111418;
  color: #e5e7ea;
  border-radius: 10px;
}

.action-btn {
  border: 1px solid;
  border-radius: 25px;
  text-align: center;
  padding: 6px;
}
</style>
