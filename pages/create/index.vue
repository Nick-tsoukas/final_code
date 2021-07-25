<template>
  <div class="pl-28 p-20 lg:flex lg:flex-row">
    <div class="w-1/2 flex flex-col ">
      <FormulateForm @submit="createCodeTwo" v-model="formValues">
        <!-- takes the metadata for the code for the code -->
        <FormulateInput
          name="title"
          label="Title"
          validation="required"
          label-class=" text-md spartan font-medium"
          input-class="border-2 border-gray-300 rounded-lg w-72 lg:w-96 h-14 pl-6 "
          placeholder="google.com"
        />
        <FormulateInput
          name="url"
          label="Enter the website address to link to your qr code"
          validation="required"
          label-class=" text-md spartan font-medium"
          input-class="border-2 border-gray-300 rounded-lg w-72 lg:w-96 h-14 pl-6 "
          placeholder="google.com"
        />

        <FormulateInput
          id="btn"
          wrapper-class="flex flex-row  mt-6"
          class="color: green;"
          type="submit"
          label="Create Code"
        />
      </FormulateForm>
    </div>
    <section>
      <img class="w-1/2" :src="link" alt="" />

      <button @click="save" class="px-6 py-2 text-custom-black bg-custom-blue">
        Save
      </button>
    </section>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "dash",
  data() {
    return {
      link: null,
      formValues: {},
      code: [],
      testing: null,
      base: null
    };
  },
  async mounted() {
    // return (this.codes = this.$strapi.user.qrCodes);
    const data = await this.$strapi.find("qrs", {
      users_permissions_user: this.$strapi.user.id
    });
    this.codes = data;
  },
  computed: {
    codeData() {
      return this.formValues;
    },
    user() {
      return this.$strapi.user;
    }
  },
  methods: {
    save: async function() {
      const qr = await this.$strapi.create("qrs", {
        ...this.formValues,

        users_permissions_user: this.$strapi.user.id
      });
      console.log("creating: ", qr);
    },
    createCodeTwo: async function() {
      this.$axios.setHeader("x-rapidapi-key", process.env.API_KEY);
      this.$axios.setHeader("x-rapidapi-host", "qrcode-monkey.p.rapidapi.com");

      this.$axios
        .$get(
          "https://qrcode-monkey.p.rapidapi.com/qr/custom?data=https%3A%2F%2Fwww.qrcode-monkey.com&size=600&file=png&download=false&config=%7B%22bodyColor%22%3A%20%22%230277BD%22%2C%20%22body%22%3A%22mosaic%22%7D"
        )
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.formulate-input::v-deep button#btn {
  padding: 1em 3em;
  background: #5fd999;
  font-family: "Spartan", sans-serif;
  border-radius: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
