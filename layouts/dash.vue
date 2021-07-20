<template>
  <div>
    <section class=" z-50 flex flex-row w-screen pt-10">
      <div class="w-1/2 pl-28">
        <h1 class="text-2xl font-bold clash_bold">
          Music Biz QR
        </h1>
      </div>
      <div class=" pr-28  flex flex-row flex-grow items-center justify-between">
        <div v-bind:key="link.url" v-for="link in links">
          <nuxt-link
            v-if="!link.logoutFunction"
            class="clash text-lg"
            :to="link.url"
            >{{ link.label }}
          </nuxt-link>
          <button
            @click="logout"
            v-if="link.logoutFunction"
            class="clash text-lg px-4 py-2 bg-custom-black text-custom-white"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hid: true,
      links: [
        {
          label: "All Codes",
          url: "/codes"
        },
        {
          label: "Create Code",
          url: "/create"
        },
        {
          label: "Track",
          url: "/track"
        },
        {
          label: "Logout",
          url: "/",
          logoutFunction: true
        }
      ]
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    }
  }
};
</script>

<style lang="scss" scoped></style>
