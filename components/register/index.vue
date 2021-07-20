<template>
  <div class="flex flex-row h-screen w-full">
    <section class="w-full lg:w-3/5 h-full pt-6 md:pt-20">
      <div>
        <h1 class="font-medium text-center text-3xl lg:text-6xl">
          Start Your Free Trial<br />
          <span class="text-lg">no credit card needed </span>
        </h1>
      </div>
      <div>
        <p
          class="line_height font-light lin text-center text-2xl lg:text-3xl pt-12 px-6 lg:px-20"
        >
          Start creating, managing, and tracking your dynamic QR codes
        </p>
      </div>
      <!-- Social media button signup -->
      <section class="w-full flex flex-col gap-6 pt-10 items-center">
        <div
          class="flex flex-row w-72 border-2 rounded-md border-custom-blue border-opacity-50 relative  items-centerrelative h-14 lg:w-96  px-6 py-4"
        >
          <div
            class="flex flex-row justify-center items-center w-14 h-full  absolute left-0 top-0"
          >
            <img class="w-8 h-8" src="/google.svg" alt="" />
          </div>
          <div class="flex flex-row flex-grow justify-center items-center">
            <p class="text-custom-blue">Sign up with Google</p>
          </div>
        </div>
        <div
          class="w-72 border-2 border-custom-black border-opacity-50 rounded-md relative flex flex-row items-center h-14 lg:w-96 "
        >
          <div
            class="flex flex-row justify-center items-center w-14 h-full  absolute left-0 top-0"
          >
            <img class="w-8 h-8" src="/facebook_blue.svg" alt="" />
          </div>
          <div class="flex flex-row flex-grow justify-center items-center">
            <p class="text-custom-black">Sign up with Facebook</p>
          </div>
        </div>
      </section>
      <!-- ============ end  -->

      <!-- This is where the form will go -->
      <section class=" w-full  flex justify-center  pt-10 ">
        <FormulateForm
          @submit="register"
          method="POST"
          data-classification="text"
          data-type="text"
          class="formulate-input w-auto px-20"
          v-model="formValues"
        >
          <FormulateInput
            class="mx-auto mb-4 w-72 lg:w-96"
            type="text"
            name="username"
            label="User Name"
            placeholder="somecoolname101"
            label-class="mb-20 text-md spartan font-medium "
            input-class=" border-2 border-gray-300 rounded-lg w-72 lg:w-96  h-14 pl-6 "
            :wrapper-class="['w-full', 'lg:w-96']"
          />
          <FormulateInput
            class="mx-auto mb-4 w-72 lg:w-96"
            type="email"
            name="email"
            label="Email address"
            placeholder="youemail@mywork.com"
            label-class="mb-20 text-md spartan font-medium "
            input-class=" border-2 border-gray-300 rounded-lg w-72 lg:w-96  h-14 pl-6 "
            validation="email"
            :wrapper-class="['w-full', 'lg:w-96']"
          />
          <FormulateInput
            class="mx-auto w-72 lg:w-96 mb-6"
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password here ..."
            label-class="mb-20 text-md spartan font-medium "
            input-class="border-2 border-gray-300 rounded-lg w-72 lg:w-96 h-14 pl-6 "
            validation="required|min:10,length"
            validation-name="Password"
          />
          <FormulateInput
            wrapper-class="flex flex-row justify-center mb-10"
            class="color: green;"
            type="submit"
            label="Create Account"
          />
        </FormulateForm>
      </section>
      {{ error }}
    </section>
    <LoginSideBar />
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {},
      error: null
    };
  },
  methods: {
    logForm: function() {
      console.log("this is the form function ");
    },
    async register() {
      this.error = null;
      const { username, email, password } = this.formValues;
      try {
        this.$axios.setToken(false);
        await this.$axios.post("auth/local/register", {
          username: username,
          email: email,
          password: password
        });
        this.success = `A confirmation link has been sent to your email account. \
        Please click on the link to complete the registration process.`;
        this.$router.push("/dash");
      } catch (e) {
        // this.error = e.response.data.message[0].messages[0].message;
        this.error = "sorry dudes we could not log the info from the form ";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.formulate-input::v-deep {
  & [data-classification="text"] {
    input {
      font-family: "Spartan", sans-serif;
    }
  }
}
.formulate-input::v-deep li.formulate-input-error {
  color: red;
}
.formulate-input-element button {
  color: red;
}
.formulate-input::v-deep button#formulate--register-4 {
  padding: 1em 4em;
  background: #5fd999;
  font-family: "Spartan", sans-serif;
  border-radius: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
