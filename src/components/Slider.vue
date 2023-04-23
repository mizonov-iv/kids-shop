<template>
  <div class="wrapper">
    <div
        class="slider"
        :style="{'margin-top': '-' + (100 * currentSlideIndex) + '%'}"
    >
      <SliderItem
          v-for="item in slides"
          :key="item.id"
          :item="item"
      />
    </div>

  </div>
  <button @click="nextSlide">Next</button>
</template>

<script>
import SliderItem from "./SliderItem.vue";
export default {
  components: {SliderItem},
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    interval: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentSlideIndex: 0
    }
  },
  methods: {
    prevSlide() {
      if(this.currentSlideIndex > 0) {
        this.currentSlideIndex--
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.slides.length - 1) {
        this.currentSlideIndex = 0
      } else {
        this.currentSlideIndex++
      }
    }
  },
  mounted() {
    if(this.interval > 0) {
      let vm = this
      setInterval(function () {
        vm.nextSlide()
      }, vm.interval)
    }
  }
}
</script>

<style scoped>

.wrapper {
  border: 2px solid black;
  max-width: 400px;
  margin: 0 auto;
  overflow: hidden;
  height: 100vh;
}

.slider {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all ease 0.5s;
}

</style>