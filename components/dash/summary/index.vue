<template>
  <div>
    <ul>
      <li v-for="code in codes" :key="code">{{ code.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    codes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
