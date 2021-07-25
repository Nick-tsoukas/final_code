<template>
  <div class="w-screen pl-28 pt-10">
    <h2 class="text-3xl font-medium">
      Username: {{ $strapi.user.username }} {{ $strapi.user.email }}
    </h2>
    <section>
      <div>
        <ul>
          <li v-for="code in codes" :key="code.id">
            <div class="flex flex-row ">
              <p>{{ code.title }}</p>
              <p>{{ code.url }}</p>
              <!-- <img class="h-46" :src="code.imgUrl" alt="" /> -->
              <p>{{ code.imgUrl }}</p>
            </div>
          </li>
        </ul>
      </div>
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
