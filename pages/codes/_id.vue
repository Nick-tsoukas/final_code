<template>
  <div>
    This is the the single code views
    <pre>{{ user[this.$route.params.id - 1] }}</pre>
  </div>
</template>

<script>
// id need to get the id from the params and make this a protected route. The data needs to displya only the logged in
// users id of the code
export default {
  middleware: "auth",
  layout: "dash",
  computed: {
    user() {
      return this.$strapi.user.code;
    }
  }
};
</script>

<style lang="scss" scoped></style>
