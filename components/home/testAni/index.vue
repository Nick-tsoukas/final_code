<template>
  <div>
    <div data-aos="fade-up">This element should be animated on scroll</div>
    <div data-aos="fade-left">This element should be animated on scroll</div>
    <div data-aos="fade-right">This element should be animated on scroll</div>
    <div data-aos="fade-down">This element should be animated on scroll</div>
    <div data-aos="slide-up">This element should be animated on scroll</div>
    <div data-aos="slide-left">This element should be animated on scroll</div>
    <div data-aos="slide-right">This element should be animated on scroll</div>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";
export default {
  name: "PageIndex",
  mixins: [aosMixin]
};
</script>
