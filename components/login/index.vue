<template>
  <div class="flex flex-row h-screen w-full">
    <section class="w-full lg:w-3/5 h-full pt-6 md:pt-20">
      <div>
        <h1 class="font-black text-center text-3xl lg:text-6xl">
          Welcome back
        </h1>
      </div>
      <div>
        <p
          class="line_height font-light lin text-center text-2xl lg:text-3xl pt-12 px-6 lg:px-20"
        >
          Sign in to start creating, managing, and tracking your dynamic QR
          codes
        </p>
      </div>
      <!-- Social media button logins -->
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
            <p class="text-custom-blue">Sign in with Google</p>
          </div>
        </div>
        <div
          class="w-72 border-2 border-custom-black border-opacity-50 rounded-md relative flex flex-row items-center h-14 lg:w-96 "
        >
          <div
            class="flex flex-row justify-center items-center w-14 h-full  absolute left-0 top-0"
          >
            <img class="w-8 h-8" src="/facebook.svg" alt="" />
          </div>
          <div class="flex flex-row flex-grow justify-center items-center">
            <p class="text-custom-black">Sign in with Facebook</p>
          </div>
        </div>
      </section>
      <!-- ============ end  -->

      <!-- This is where the form will go -->
      <section class=" w-full  flex justify-center  pt-10 ">
        <FormulateForm
          @submit="login"
          method="POST"
          data-classification="text"
          data-type="text"
          class="formulate-input w-auto px-20"
          v-model="formValues"
        >
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
            label="Login"
          />
          <div class="w-full text-center">
            <nuxt-link
              class="text-custom-blue w-full text-center"
              to="/register"
              >Don't have an account ... Sign Up</nuxt-link
            >
          </div>
        </FormulateForm>
      </section>
      <div class="w-full mx-auto text-center" v-if="error">
        <nuxt-link
          to="/register"
          class="text-center w-full text-lg text-custom-blue"
          >{{ error }}</nuxt-link
        >
      </div>
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
  mounted() {
    console.log(this.$route);
  },
  methods: {
    logForm: function() {
      console.log("this is the form function ");
    },
    async login() {
      const { email, password } = this.formValues;
      try {
        const { user, jwt } = await this.$strapi.login({
          identifier: email,
          password
        });
        // if (process.client) {
        //   localStorage.setItem("jwt", jwt);
        //   localStorage.setItem("user", JSON.stringify(user));
        // }
        // console.log(user, jwt);
        this.$router.push("/dash");
      } catch (error) {
        this.error = "Don't have an accoun? Sign Up ... it's free";
      }
      // this.error = null;
      // try {
      //   console.log(email, password);
      //   await this.$auth.loginWith("local", {
      //     data: {
      //       identifier: email,
      //       password: password
      //     }
      //   });
      //   this.$router.push("/dash");
      // } catch (e) {
      //   this.error = "Don't have an account? Sign up ... it's free";
      // }
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
.formulate-input::v-deep button#formulate--login-6 {
  padding: 1em 3em;
  background: #5fd999;
  font-family: "Spartan", sans-serif;
  border-radius: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
