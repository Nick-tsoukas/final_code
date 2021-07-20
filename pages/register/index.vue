<template>
  <div class="w-full h-auto">
    <Register />
  </div>
</template>

<script>
export default {
  layout: "auth"
  //   data() {
  //     return {
  //       username: "",
  //       email: "",
  //       password: "",
  //       success: null,
  //       error: null
  //     };
  //   },
  //   methods: {
  //     async register() {
  //       this.error = null;
  //       try {
  //         this.$axios.setToken(false);
  //         await this.$axios.post("auth/local/register", {
  //           username: this.username,
  //           email: this.email,
  //           password: this.password
  //         });
  //         this.success = `A confirmation link has been sent to your email account. \
  //  Please click on the link to complete the registration process.`;
  //         this.$router.push("/dash");
  //       } catch (e) {
  //         // this.error = e.response.data.message[0].messages[0].message;
  //         this.error = "sorry dudes we could not log the info from the form ";
  //       }
  //     }
  //   }
};
</script>
