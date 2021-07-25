<template>
  <div class="w-screen pl-28 pt-10">
    <h2 class="text-3xl font-medium">
      Username: {{ $strapi.user.username }} {{ $strapi.user.email }}
    </h2>
    <section>
      <pre>{{ codes }}</pre>
    </section>
    <!-- <DashAllCodes class="flex-grow" :codes="codes" /> -->
    <!-- <DashTrack class="flex-grow w-1/2" :codes="codes" /> -->
    <!-- <DashSummary class="flex-grow" :codes="codes" /> -->
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "dash",
  data() {
    return {
      ip: "",
      codes: []
    };
  },
  async mounted() {
    // return (this.codes = this.$strapi.user.qrCodes);
    const data = await this.$strapi.find("qrs", {
      users_permissions_user: this.$strapi.user.id
    });
    this.codes = data;
  },
  methods: {}
};
</script>
