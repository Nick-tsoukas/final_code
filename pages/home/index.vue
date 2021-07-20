<template>
  <div>
    <!-- <Hero /> -->
    <HomeHeroTwo />
    <HomeIntro />
    <HomeVideoIntro class="pt-20" />
    <HomeContactSider />
    <Footer />
  </div>
</template>

<script>
export default {
  middleware: "guest"
};
</script>

<style lang="scss" scoped></style>
