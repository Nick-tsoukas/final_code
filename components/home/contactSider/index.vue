<template>
  <div
    ref="busstop"
    id="cta"
    class="w-screen h-auto flex flex-row bg-custom-black"
  >
    <div
      class="h-auto flex justify-center items-center bg-custom-black flex-grow"
    ></div>
    <transition name="slide">
      <div
        v-if="showIt"
        class="flex flex-col justify-center pt-10 w-full h-full bg-custom-white "
      >
        <h2
          :class="{ hello: showForm }"
          class="magic base_2 text-3xl text-center"
        >
          <span class="text-4xl font-bold text-center block  "
            >Got Questions ☝️</span
          >
          <br />
          Drop Us A Line
          <span class="text-2xl px-2">
            ✏️
          </span>
          ... we'd love to hear from you
        </h2>
        <!-- <transition name="fade"> -->
        <section
          :class="{ hello: showForm }"
          class="magic base mx-auto pb-20 pt-6"
        >
          <FormulateForm
            ref="myForm"
            data-classification="text"
            data-type="text"
            @submit="logForm"
            class="formulate-input w-auto px-20"
            v-model="formValues"
          >
            <section class="flex flex-row gap-10 pt-6">
              <FormulateInput
                class="mx-auto mb-4 w-72  lg:w-96"
                type="email"
                name="email"
                label="Email address"
                placeholder="youemail@mywork.com"
                label-class="mb-20 text-md spartan font-medium "
                input-class=" border-2 border-gray-300 rounded-lg w-72 lg:w-96  h-14 pl-6 "
                validation="email"
                :wrapper-class="['w-full', 'lg:w-96']"
              />
              <FormulateInput
                class="mx-auto mb-4 w-72 lg:w-96 "
                type="text"
                name="name"
                label="Full name"
                placeholder="Write your message here "
                label-class="mb-20 text-md spartan font-medium "
                input-class=" border-2 border-gray-300 rounded-lg w-72 lg:w-96  h-14 pl-6 "
                validation="required"
                :wrapper-class="['w-full', 'lg:w-96']"
              />
            </section>
            <section class="w-full">
              <FormulateInput
                class=" mb-4 w-full lg:w-full px-10 pt-6 "
                type="textarea"
                name="message"
                label-class="mb-20 text-md spartan font-medium "
                input-class="min_ h-24 border-2 border-gray-300 rounded-lg w-full lg:w-full pl-6 "
                label="Message"
              />
            </section>
            <FormulateInput
              wrapper-class="flex flex-row justify-center"
              class="pt-10"
              type="submit"
              label="Send Message  💬"
            />
          </FormulateForm>
        </section>
        <!-- </transition> -->
      </div>
    </transition>
    <div class="h-full bg-custom-black flex-grow"></div>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";
export default {
  name: "PageIndex",
  mixins: [aosMixin],
  data() {
    return {
      formValues: {},
      show: false,
      windowTop: 0,
      showForm: false,
      showIt: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      const top = this.$refs.busstop.getBoundingClientRect().top;
      if (top <= window.innerHeight - 10) {
        if (this.showIt == false) {
          this.showIt = true;
          setTimeout(() => {
            this.showForm = true;
          }, 100);
        }
      }
    },
    logForm: function() {
      conosole.log("hello world this is the log form data");
    },
    animate: function() {
      if (!this.show) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.formulate-input::v-deep button#formulate--home-4 {
  padding: 0.8em 3em;
  background: #5fd999;
  font-family: "Spartan", sans-serif;
  border-radius: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.formulate-input::v-deep {
  & [data-classification="text"] {
    input {
      font-family: "Spartan", sans-serif;
    }
  }
}
.formulate-input::v-deep li.formulate-input-error {
  color: red;
}
.formulate-input-element button {
  color: red;
}
.min_ {
  min-height: 300px;
}

.fly-enter {
  opacity: 0;
}
.magic {
  opacity: 0;
}

.hello {
  opacity: 1 !important;
}

.base {
  transition: all linear 2s;
}
.base_2 {
  transition: all linear 1.5s;
}

.fly-enter-active,
.fly-enter-leave {
  transition: opacity 4s ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter {
  width: 0;
  transition-timing-function: cubic-bezier(0, 0, 0.58, 1);

  transition: width 1s;
}

.slide-enter-active,
.slide-enter-leave {
  transition-timing-function: cubic-bezier(0, 0, 0.58, 1);

  transition: width 1.4s;
}
</style>
