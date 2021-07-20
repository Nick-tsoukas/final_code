<template>
  <div>
    <pre>{{ $strapi.user.code }}</pre>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "dash"
};
</script>

<style lang="sass" scoped></style>
