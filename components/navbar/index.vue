<template>
  <div>
    <section class=" z-50 flex flex-row w-screen">
      <div class="w-1/2 pl-28">
        <h1 class="text-2xl font-bold clash_bold">
          Music Biz QR
        </h1>
      </div>
      <div class=" pr-28 flex flex-row flex-grow items-center justify-between">
        <nuxt-link
          class="clash text-lg"
          :to="link.url"
          v-bind:key="link.url"
          v-for="link in links"
          >{{ link.label }}</nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hid: true,
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "About",
          url: "/about"
        },
        {
          label: "Features",
          url: "/features"
        },
        {
          label: "Login",
          url: "/login"
        },
        {
          label: "Sign up",
          url: "/register"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
