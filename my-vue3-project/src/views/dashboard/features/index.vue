<template>
  <div class="w-full">
    <div class="w-full flex justify-center items-center text-center">
      <div class="items-center">
        <div>Frequently Asked Questions</div>
        <div>
          If you’re trying to get to know us better, you’ve come to the right
          place. Feel free to leave us message
        </div>
        <bh-button :nameButton="nameJoinNow"></bh-button>
      </div>
    </div>

    <!-- Body -->
    <div class="w-full">
      <!-- aws 1 -->
      <div class="w-full">
        <div class="title">What Tinder® picture should I use?</div>
        <div>
          Upload photos to Tinder® that feature who everyone came to see: you!
          Ditch your friends because this isn’t about them and remove the
          sunglasses because they hide your face. The best pics are in focus and
          some say a smile goes a long way here.
        </div>
      </div>
      <!-- aws 2 -->
      <div class="w-full">
        <div class="title">What should I put in my bio?</div>
        <div>
          Your bio is a snapshot of who you are. If writing isn’t your thing,
          you can make a list of things you like or want. Keep it light and talk
          about your hobbies or go deep and talk about what you’re looking for
          in a match. For info on what not to include in your bio, check out our
        </div>
      </div>
      <!-- aws 3 -->
      <div class="w-full">
        <div class="title">How do I unmatch someone?</div>
        <div>
          If you’re having second thoughts about someone you Liked—no problem.
          You can unmatch anyone at any time. Tap the blue shield in either your
          match’s profile or the chat to go to the Safety Toolkit and unmatch.
        </div>
      </div>

      <!-- aws 4 -->
      <div class="w-full">
        <div class="title">How do Tinder® matches work?</div>
        <div>
          Two members must both use the Swipe Right® feature to Like each other
          in order to make a match. What happens when Tinder® says you missed a
          match?
        </div>
      </div>

      <!-- aws 5 -->
      <div class="w-full">
        <div class="title">What Tinder® picture should I use?</div>
        <div>
          Upload photos to Tinder® that feature who everyone came to see: you!
          Ditch your friends because this isn’t about them and remove the
          sunglasses because they hide your face. The best pics are in focus and
          some say a smile goes a long way here.
        </div>
      </div>

      <!-- aws 6 -->
      <div class="w-full">
        <div class="title">What should I put in my bio?</div>
        <div>
          Your bio is a snapshot of who you are. If writing isn’t your thing,
          you can make a list of things you like or want. Keep it light and talk
          about your hobbies or go deep and talk about what you’re looking for
          in a match. For info on what not to include in your bio, check out our
        </div>
      </div>

      <!-- aws 7 -->
      <div class="w-full">
        <div class="title">How do I unmatch someone?</div>
        <div>
          If you’re having second thoughts about someone you Liked—no problem.
          You can unmatch anyone at any time. Tap the blue shield in either your
          match’s profile or the chat to go to the Safety Toolkit and unmatch.
        </div>
      </div>

      <!-- aws 8 -->
      <div class="w-full">
        <div class="title">How do Tinder® matches work?</div>
        <div>
          Two members must both use the Swipe Right® feature to Like each other
          in order to make a match. What happens when Tinder® says you missed a
          match? When we tell you that you missed a match it means you used the
          Swipe Left™ feature on someone who Liked you.
        </div>
      </div>
    </div>

    <bh-button :nameButton="nameGetStarted"></bh-button>
  </div>
</template>

<script>
import bhButton from "@/control-ui/button/bh-button.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: { bhButton },
  name: "FeatureView",
  data() {
    return {
      nameJoinNow: "Join Now",
    };
  },
});
</script>

<style lang="scss" scoped></style>
