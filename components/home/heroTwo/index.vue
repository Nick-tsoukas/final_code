<template>
  <div class="relative back_ground  w-screen pt-10 pb-28">
    <!-- Header component is starts here -->

    <!-- Header component ends here =========== -->
    <section class="relative back_test_ flex flex-row min-h-96 pt-28">
      <div class="back_ w-2/3 pl-28">
        <div class="flex flex-row items-center">
          <div class="flex flex-row items-center">
            <svg
              width="10"
              height="6"
              viewBox="0 0 40 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="3" x2="40" y2="3" stroke="#6EE6B7" stroke-width="8" />
            </svg>

            <h2 class="pl-2 text-2xl">
              <span class="pr-2">💨</span> Quick Response Codes
            </h2>
          </div>
        </div>
        <h2
          style="line-height: 85px;"
          class="text-4xl font-medium spartan pt-10"
        >
          👋 Create dynamic and branded,
          <div
            class="bg-black  inline-block transition-all  text-white py-4 pl-6 pr-10 mr-4 "
          >
            <span class="text-white font-bold ">QR</span> Codes
            <br />
          </div>
          to drive leads to the content you need when you want
        </h2>
        <div class="w-auto">
          <button
            class="btn spartan text-custom-black font-medium rounded-md border-2 border-black mr-10 mt-10 "
          >
            Get Started
          </button>
          <button
            class="btn spartan text-custom-black font-medium rounded-lg border-2 border-black "
          >
            Learn More
          </button>
        </div>
      </div>
      <div
        data-aos="slide-left"
        data-aos-duration="1100"
        data-aos-once="true"
        class="flex items-center h-full  justify-center  w-1/3"
      >
        <div>
          <div class="relative">
            <img
              class=" transition-opacity  h-96 pt-20 opacity-30"
              src="/microphone.svg"
              alt=""
            />

            <img
              class="absolute top-24 right-24  transition-opacity  opacity-20 "
              src="qr-code_one.svg"
              alt=""
            />
          </div>
        </div>
        <!-- <img
          :class="{ hid: changing }"
          class="transition-opacity h-96"
          :src="img"
          alt=""
        /> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hid: true,
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "About",
          url: "/about"
        },
        {
          label: "Features",
          url: "/features"
        },
        {
          label: "Login",
          url: "/login"
        },
        {
          label: "Sign up",
          url: "/register"
        }
      ],
      heroImage: [
        "/microphone.svg",
        "/qr-code_three.svg",
        "/qr-code_two.svg",
        "/qr-code_three.svg",
        "/qr-code_two.svg",
        "/qr-code_three.svg",
        "/qr-code_four.svg"
      ],
      index: 0,
      changing: false,
      grow: false
    };
  },
  mounted() {
    this.grow = true;
    this.hid = false;
    console.log("look at the classes");
  },
  computed: {
    img: function() {
      return this.heroImage[this.index];
    }
  }
};
</script>

<style lang="scss" scoped>
/* .back__ {
  background-image: url("/gray_code.jpg");
  height: auto;
  background-position: center center;
  background-size: cover;
  transition: all 0.5s;
}
.back_ {
  background-image: url("/gray_code.jpg");
  height: auto;
} */

.hide {
  display: none;
  transition: all linear 2s;
}

.grow {
  display: inline;
  transition: all linear 2s;
  width: 100px;
}
.back_ground {
  /* background-image: url("/microphone.svg"); */
}
.back_zoom {
  background-image: url("/gray_code.jpg");
  background-position: center center;
  background-size: cover;
  transition: all 0.5s;
  top: 0;
  width: 100%;
  min-height: 400px;
}
.back_zoom:hover,
.back_zoom:focus {
  transform: scale(1.2);
}
.btn {
  padding: 1em 3em;
}
.start_ {
  width: 0px;
  transition: all linear 1s;
}

.width_ {
  width: auto;
}

.fin {
  width: auto;
}

.hid {
  opacity: 0.9;
}
</style>
