<template>
  <div class="pl-28 p-20">
    <div class="lg:flex lg:flex-row">
      <div class="w-1/2 flex flex-col">
        <FormulateForm @submit="create" v-model="formValues">
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
        <div class="w-48 h-48 lg:w-64 lg:h-64">
          <img
            v-if="qrImageUrl"
            class="object-contain h-full w-full"
            :src="qrImageUrl"
            alt=""
          />
          <div v-else class="h-full w-full bg-gray-50"></div>
        </div>
        <button
          @click="save"
          class="px-6 py-2 mt-4 text-custom-black bg-custom-blue"
        >
          Save
        </button>
      </section>
    </div>
    <div v-if="errorMsg" class="pt-8">{{ errorMsg }}</div>
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
      qrImageUrl: null,
      qrBlob: null,
      errorMsg: null,
      type: "png",
    };
  },

  methods: {
    async save() {
      if (process.client) {
        // upload qr image to strapi, and get the upload id'
        const formData = new FormData();
        const label = this.formValues.title.replace(/ /g, "-");
        formData.append("files", this.qrBlob, label + "." + this.type);
        const qrId = (await this.$strapi.create("upload", formData))[0].id;

        // create the qr object with the qr image uploaded
        const qr = await this.$strapi
          .create("qrs", {
            ...this.formValues,
            qrMediaLibraryImage: { id: qrId },
            users_permissions_user: this.$strapi.user.id,
          })
          .catch((err) => {
            this.errorMsg = "ERROR: " + err;
          });
        if (qr && qr.id) {
          this.$router.push(`/codes/${qr.id}`);
        }
      }
    },

    async create() {
      await fetch("https://qrcode-monkey.p.rapidapi.com/qr/transparent", {
        method: "POST",
        headers: {
          "x-rapidapi-key": process.env.API_KEY,
          "x-rapidapi-host": "qrcode-monkey.p.rapidapi.com",
          Accept: `image/${this.type}`,
        },
        body: JSON.stringify({
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
            logo: "",
          },
          download: false,
          file: this.type,
        }),
      })
        .then((data) => {
          return data.blob();
        })
        .then((result) => {
          this.qrBlob = new Blob([result], { type: result.type || this.type });
          this.qrImageUrl = window.URL.createObjectURL(this.qrBlob);
        });
        // this.save()
    },
  },
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
