<template>
  <button
    class="btn spartan text-custom-black font-medium rounded-md border-2 border-black mr-10 mt-10 "
  >
    Get Started
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      defalut() {
        return "Learn More";
      },
      link: {
        type: String,
        default() {
          return "/";
        },
        size: {
          type: String,
          default() {
            return "px-6 py-2";
          }
        },
        color: {
          type: String,
          default() {
            return "primaray_button";
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.primary_button {
  background: purple;
  color: white;
}
</style>
