<template>
  <div
    data-aos="fade-left"
    data-aos-duration="1100"
    data-aos-once="true"
    style="min-height: 500px;"
    class="relative  back w-full flex flex-row"
  >
    <section style="z-index: 999" class=" w-2/3 h-auto  ">
      <div class="h-full">
        <div style="">
          <h2
            style="z-index: 999"
            class=" relative  text-6xl text-custom-black p-28 font-bold spartan"
          >
            Effective Ways To Use Your Code
          </h2>
        </div>
      </div>
    </section>
    <section class="w-1/3  h-auto py-20 px-28">
      <div
        style="z-index: 999"
        class="w-full h-full flex justify-center items-center"
      >
        <img style="z-index: 999" src="/code_star.png" alt="" />
      </div>
    </section>
    <div style="z-index: 99" class="w-full h-full absolute top-0 grad"></div>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";

export default {
  mixins: [aosMixin]
};
</script>

<style lang="scss" scoped>
.back {
  background-image: url("/back_code.png");
}

.grad {
  /* Rectangle 34 */

  background: linear-gradient(
    116deg,
    rgb(255 255 255 / 71%) 50%,
    rgb(0 194 210 / 21%) 90%
  );
}
</style>
