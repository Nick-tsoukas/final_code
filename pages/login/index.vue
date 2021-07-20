<template>
  <div class="w-full h-auto">
    <Login />
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "auth"
};
</script>
