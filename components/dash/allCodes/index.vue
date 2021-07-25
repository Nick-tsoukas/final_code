<template>
  <div class="flex-grow w-full ">
    <table class="shadow-lg" style="min-width: 100%">
      <tr class="bg-custom-blue border-t-2 border-black rounded-lg ">
        <th class="text-lg font-medium p-4 text-white">Title</th>
        <th class="text-lg font-medium p-4 text-white">Date</th>
        <th class="text-lg font-medium p-4 text-white">Type</th>
        <th class="text-lg font-medium p-4 text-white">Url</th>
      </tr>
      <tr class="oddEven" v-for="code in codes" :key="code.title">
        <td class="flex items-center">
          <div class="w-10 h-10 bg-blue-600 mr-4"></div>
          <p>{{ code.label }}</p>
        </td>

        <td>
          <p class="relative top-2">
            {{ $moment(code.date, "YYYY-MM-DD").format("LL") }}
          </p>
        </td>
        <td>
          <p class="relative top-2">{{ code.type }}</p>
        </td>
        <td>
          <a href="https://google.com" class="relative top-2">{{ code.url }}</a>
        </td>
      </tr>
    </table>
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

<style lang="scss" scoped>
tr {
  td {
    padding: 0.8em;
    border-bottom: 1px solid black;
  }
}

/* tr.oddEven:nth-child(odd) {
  background: rgba(90, 90, 90, 0.226);
} */
</style>
