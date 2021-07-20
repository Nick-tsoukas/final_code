<template>
  <div>
    <section class=" z-50 flex flex-row w-screen pt-10">
      <div class="w-1/2 pl-28">
        <nuxt-link to="/dash" class="text-2xl font-bold clash_bold">
          Music Biz QR
        </nuxt-link>
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
          label: "Dashboard",
          url: "/dash"
        },
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
          label: "Profile",
          url: "/profile"
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
      await this.$strapi.logout();
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped></style>
