<template>
  <div>
    <div
      class="pick_back relative  flex flex-row  justify-around w-screen h-auto mt-20 "
    >
      <div
        style="z-index: 1"
        class="absolute top-0  left-0 bg-custom-black opacity-70  h-full w-full"
      ></div>
      <div
        data-aos-once="true"
        data-aos="slide-up"
        data-aos-duration="500"
        class="z-50 w-full h-full hover:bg-custom-green"
      >
        <div
          class="flex flex-row items-center justify-center w-full bg-black h-auto rounded-tl-md rounded-tr-md"
        >
          <h3
            class="hover:text-red-300  spartan text-white font-medium tracking-widest p-6  text-2xl"
          >
            Dynamic
          </h3>
        </div>
        <!-- second element in the card -->
        <div class="flex-grow sea">
          <img class="h-44 w-full object-fill" src="blend-tool.svg" alt="" />
        </div>
        <!-- Text content for the card -->
        <div class="flex-grow px-6 py-6 bg-black h-72">
          <p class="pb-6 text-lg spartan">Edit your dynamic code</p>
          <p class="test_filter">
            Here is some more filler text for the card. I will talk about the
            service and they let the user know what the service is about
          </p>
        </div>
      </div>
      <div
        data-aos-once="true"
        data-aos="slide-up"
        data-aos-duration="700"
        class="z-50 w-full h-full hover:bg-custom-green"
      >
        <div
          class="flex flex-row items-center justify-center w-full bg-custom-black h-auto rounded-tl-md rounded-tr-md"
        >
          <h3
            class="spartan text-white font-medium tracking-widest p-6  text-2xl"
          >
            Branded
          </h3>
        </div>
        <!-- second element in the card -->
        <div class="flex-grow sea">
          <img
            class="h-44 w-full object-fill"
            src="logo_code_card.svg"
            alt=""
          />
        </div>
        <!-- Text content for the card -->
        <div class="flex-grow px-6 py-6 bg-custom-black h-72">
          <p class="text-lg spartan pb-6">Design And Brand</p>
          <p>
            Stand out from the crowd and get more traffic with branded QR codes
          </p>
        </div>
      </div>
      <div
        data-aos-once="true"
        data-aos-duration="900"
        data-aos="slide-up"
        class="z-50 w-full h-full hover:bg-custom-green "
      >
        <div
          class="flex flex-row items-center justify-center w-full bg-black h-auto rounded-tl-md rounded-tr-md"
        >
          <h3
            class="spartan text-white font-medium tracking-widest p-6  text-2xl"
          >
            Track
          </h3>
        </div>
        <!-- second element in the card -->
        <div class="flex-grow sea">
          <img class="h-44 w-full object-fill" src="/operation.svg" alt="" />
        </div>
        <!-- Text content for the card -->
        <div class="flex-grow px-6 py-6 bg-black h-72">
          <p class="text-lg pb-6">Analytics</p>
          <p>
            Get detailed information about your leads and advertizing effort.
            Get the data you need to convert useris into sales
          </p>
        </div>
      </div>
      <div
        data-aos-once="true"
        data-aos="slide-up"
        data-aos-duration="1100"
        class=" z-50 w-full h-full hover:bg-custom-green "
      >
        <div
          class="flex flex-row items-center justify-center w-full bg-custom-black h-auto rounded-tl-md rounded-tr-md"
        >
          <h3
            class="spartan text-white font-medium tracking-widest p-6  text-2xl"
          >
            Drive
          </h3>
        </div>
        <!-- second element in the card -->
        <div class="flex-grow sea">
          <img class=" h-44 w-full object-fill" src="growing.svg" alt="" />
        </div>
        <!-- Text content for the card -->
        <div class="flex-grow px-6 py-6 h-72 bg-custom-black">
          <p class="text-lg pb-6">This is the text content</p>
          <p>
            Here is some more filler text for the card. I will talk about the
            service and they let the user know what the service is about
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";
export default {
  name: "PageIndex",
  mixins: [aosMixin]
};
</script>

<style lang="scss" scoped>
.round > div {
  border-radius: 5%;
}

.test-filter {
  color: red;
}

.pick_back {
  background-image: url("/iso_code.jpeg");
  background-position: center center;
  background-size: cover;
}
p {
  color: white !important;
}

.sea {
  background-color: #8400ff18 !important ;
  padding-top: 1em;
  padding-bottom: 1em;
}
</style>
