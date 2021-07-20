<template>
  <div
    data-aos="slide-down"
    data-aos-duration="1000"
    data-aos-offset="300"
    data-aos-once="true"
    class="w-full"
  >
    <section
      class=" mx-auto -mt-20 w-3/4 h-auto pt-20 flex flex-row justify-center items-center"
    >
      <svg
        class="relative"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 323.7 323.7"
        style="enable-background:new 0 0 323.7 323.7; max-width: 300px; max-height: 300px"
        xml:space="preserve"
      >
        <g id="XMLID_85_">
          <path
            class="blue_"
            :fill="color_one"
            id="XMLID_86_"
            d="M216.5,178.2c2.1-1.2,3.4-3.5,3.4-5.9v-64.2l-59.7,34v68.1L216.5,178.2z"
          />
          <path
            :fill="color_two"
            id="XMLID_87_"
            d="M86.7,172.3c0,2.4,1.3,4.7,3.4,5.9l56.3,32.1v-68.1l-59.7-34C86.7,108.1,86.7,172.3,86.7,172.3z"
          />
          <path
            :fill="color_three"
            id="XMLID_88_"
            d="M149.9,64.2L93.6,96.3l59.7,34l59.7-34l-56.3-32.1C154.7,63,152,63,149.9,64.2z"
          />
        </g>
      </svg>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-offset="300"
        data-aos-once="true"
        style="left: 35%"
        class="absolute"
      >
        <div
          @mouseover="growToggle"
          class="flex flex-row justify-center items-center"
        >
          <h2>Dynamic Codes</h2>
        </div>
      </div>
      <div
        @mouseover="growToggle"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-once="true"
        style="right: 35%"
        class="absolute"
      >
        <div>
          <h2>Dynamic Codes</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";

export default {
  mixins: [aosMixin],
  data() {
    return {
      grow: false,
      colors: ["#F59B8E", "#5FD999", "#8875f4"],
      color_one: "#F59B8E",
      color_two: "#5FD999",
      color_three: "#8875f4",
      classColor: "blue_"
    };
  },
  mounted() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * 3);
    }, 1000);
  },
  methods: {
    growToggle: function() {
      console.log(
        "this is the grow toggle function should be triggered on the hover efvent lock up dacs "
      );
      if (this.grow == false) {
        this.grow = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.blue_ {
  fill: green !important;
}

.scale_ {
  font-size: 3em;
}
</style>
