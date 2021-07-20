<template>
  <div class="pl-28 pt-20"></div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "dash",
  computed: {
    user() {
      return this.$strapi.user;
    },
    codes() {
      return this.$strapi.user.code;
    }
  }
};
</script>
