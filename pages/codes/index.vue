<template>
  <div class="pl-28 pt-10">
    <pre>{{ codes }}</pre>
    <!-- <DashAllCodes class="flex-grow" :codes="codes" /> -->
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "dash",
  data() {
    return {
      codes: []
    };
  },
  computed: {
    user() {
      return this.$strapi.user;
    }
  },
  async mounted() {
    // return (this.codes = this.$strapi.user.qrCodes);
    const data = await this.$strapi.find("qrs", {
      users_permissions_user: this.$strapi.user.id
    });
    this.codes = data;
  }
};
</script>
