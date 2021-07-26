<template>
  <div class="pl-28 pt-10">
    <button
      class="py-2 px-4 border border-2 border-gray-300"
      @click="refreshQrCodes"
    >
      refresh codes
    </button>
    <pre v-if="$strapi.user.qrCodes.length" class="mt-2"
      >{{ $strapi.user.qrCodes }}
    </pre>
    <!-- <DashAllCodes class="flex-grow" :codes="codes" /> -->
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "dash",
  async mounted() {
    this.$fetch();
  },
  async fetch() {
    this.$strapi.user.qrCodes = await this.$strapi
      .find("qrs", {
        users_permissions_user: this.$strapi.user.id,
      })
      .then((qrs) => {
        return qrs.map((qrCode) => {
          return qrCode;
        });
      });
  },
  methods: {
    refreshQrCodes() {
      this.$strapi.user.qrCodes = [];
      setTimeout(async () => {
        this.$fetch();
      }, 800);
    },
  },
};
</script>
