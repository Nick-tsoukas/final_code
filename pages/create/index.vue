<template>
  <div class="pl-28 p-20 lg:flex lg:flex-row">
    <div class="w-1/2 flex flex-col ">
      <FormulateForm @submit="createCode" v-model="formValues">
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
      <div v-if="link !== null">
        <button
          @click="save"
          class="px-6 py-2 text-custom-black bg-custom-blue"
        >
          Save
        </button>
      </div>
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
      code: []
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
    sendToApi: async function() {},
    save: async function() {
      console.log(this.formValues);
      const qr = await this.$strapi.create("qrs", {
        ...this.formValues,
        img: this.link,
        users_permissions_user: this.$strapi.user.id
      });
      console.log("creating: ", qr);
    },
    logUser: async function() {
      console.log(this.formValues);
    },
    createCode: async function() {
      fetch(
        "https://qrcode-monkey.p.rapidapi.com/qr/custom?data=https%3A%2F%2Fwww.qrcode-monkey.com&size=600&file=png&download=true&config=%7B%22bodyColor%22%3A%20%22%230277BD%22%2C%20%22body%22%3A%22mosaic%22%7D",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": process.env.API_KEY,
            "x-rapidapi-host": "qrcode-monkey.p.rapidapi.com"
          }
        },
        {
          file: "png"
        }
      )
        .then(response => {
          const reader = response.body.getReader();
          return new ReadableStream({
            start(controller) {
              return pump();

              function pump() {
                return reader.read().then(({ done, value }) => {
                  // When no more data needs to be consumed, close the stream
                  if (done) {
                    controller.close();
                    return;
                  }

                  // Enqueue the next data chunk into our target stream
                  controller.enqueue(value);
                  return pump();
                });
              }
            }
          });
        })
        .then(stream => new Response(stream))
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob))
        .then(url => (this.link = url))
        .catch(err => console.error(err));
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
