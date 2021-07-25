<template>
  <div class="pl-28 p-20 lg:flex lg:flex-row">
    <div class="w-1/2 flex flex-col ">
      <!-- <pre>{{ qrImageUrl }}</pre> -->

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
      <img
        v-if="qrImageUrl"
        class="object-contain h-full w-full"
        :src="qrImageUrl"
        alt=""
      />

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
      formValues: { title: "Hello", url: "google.com" },
      code: [],
      testing: null,
      base: null,
      qrImageUrl: null
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
    async uploadByUrl(url) {
      fetch(url)
        .then(response => response.blob())
        .then(function(myBlob) {
          const formData = new FormData();
          formData.append("files", myBlob);
          console.log(formData);
          fetch("http://localhost:1337/upload", {
            method: "POST",
            headers: {
              Authorization: "Bearer " // <- Don't forget Authorization header if you are using it.
            },
            body: formData
          })
            .then(response => {
              const result = response.json();
              console.log("result", result);
            })
            .catch(function(err) {
              console.log("error:");
              console.log(err);
            });
        });
    },
    save: async function() {
      if (process.client) {
        const myBlob = await fetch("https:" + this.qrImageUrl, {
          mode: "no-cors"
        }).then(response => response.blob());
        // blob empty
        console.log(myBlob);

        const formData = new FormData();
        formData.append("files", myBlob);
        // below broken
        const qrId = await this.$strapi.create("upload", { body: formData });
        console.log(qrId);
        const qr = await this.$strapi.create("qrs", {
          ...this.formValues,
          imgUrl: this.qrImageUrl,
          qrMediaLibraryImage: { id: 3 },
          users_permissions_user: this.$strapi.user.id
        });
        // console.log("creating: ", qr);
      }
    },

    async createCodeTwo() {
      this.$axios.setHeader("x-rapidapi-key", process.env.API_KEY);
      this.$axios.setHeader("x-rapidapi-host", "qrcode-monkey.p.rapidapi.com");

      this.qrImageUrl = await this.$axios
        .$post("https://qrcode-monkey.p.rapidapi.com/qr/transparent", {
          data: this.formValues.url,
          config: {
            body: "rounded-pointed",
            eye: "frame14",
            eyeBall: "ball16",
            erf1: [],
            erf2: ["fh"],
            erf3: ["fv"],
            brf1: [],
            brf2: ["fh"],
            brf3: ["fv"],
            bodyColor: "#5C8B29",
            bgColor: "#FFFFFF",
            eye1Color: "#3F6B2B",
            eye2Color: "#3F6B2B",
            eye3Color: "#3F6B2B",
            eyeBall1Color: "#60A541",
            eyeBall2Color: "#60A541",
            eyeBall3Color: "#60A541",
            gradientColor1: "#5C8B29",
            gradientColor2: "#25492F",
            gradientType: "radial",
            gradientOnEyes: false,
            logo: ""
          },
          download: true,
          file: "png"
        })
        .then(response => {
          // console.log(response);
          return response.imageUrl;
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
