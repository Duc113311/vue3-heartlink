<template>
  <div class="w-full h-footer">
    <div class="w-full flex items-center gap-8">
      <div class="font-semibold text-xl">GET THE APP</div>
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
    <div class="w-full mt-5 border-b-2">
      <div class="text-describe pb-3">
        Attention all singles! Are you ready to dive into the world of love and
        dating? Look no further than Dating, the ultimate destination for
        finding your perfect match. With a staggering billion matches and
        counting, it's undeniably the best free dating site out there.
      </div>
      <div class="text-describe pb-3">
        In today's dating landscape, meeting people online has become the norm,
        and Dating, as the world's most popular free dating app, brings together
        millions of like-minded singles at your fingertips. No matter if you
        identify as straight or part of the LGBTQIA community, Dating is here to
        ignite the sparks of connection.
      </div>
      <div class="text-describe pb-3">
        Dating goes beyond the ordinary dating sites; it's a diverse app that
        welcomes adults of all backgrounds and experiences. Connect, create
        memories, and explore the possibilities – all in one place.
      </div>
      <div class="text-describe pb-3">
        Don't miss out on the chance to discover love, new friendships, and
        exciting connections. Join Dating now and let the journey to meaningful
        experiences begin!
      </div>
    </div>
    <div class="w-full flex justify-between text-describe pt-2 pb-2">
      <div>FAQ / Safety tips / Terms / Cookie Policy / Privacy settings</div>
      <div>© 2022 Match Group, LLC. All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "footer-page",

  data() {
    return {};
  },

  methods: {},
});
</script>

<style lang="scss" scoped>
.text-describe {
  font-size: 14px;
}

.h-footer {
  height: 21rem;
}
</style>
