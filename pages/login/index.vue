<template>
  <div class="w-full h-auto">
    <Login />
  </div>
</template>

<script>
export default {
  middleware: "guest",
  layout: "auth"
};
</script>
