<template>
  <div>
    
    <pre>{{ qrCodeData }}</pre>
  </div>
</template>

<script>

export default {
  middleware: "auth",
  layout: "dash",
  data: ()=>{
    return {
      qrCodeData: null
    }
  },
  mounted() {
    this.getQrCodeData()
  },
  methods: {
    async getQrCodeData() {
      this.qrCodeData = await this.$strapi
        .find("qrs", {
          id: this.$route.params.id,
          users_permissions_user: this.$strapi.user.id,
        })
        .catch((err) => {
          console.err(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
