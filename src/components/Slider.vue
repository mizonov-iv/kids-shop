<template>
  <div class="slider-wrapper">
    <div
        class="slider"
        @scroll="nextSlide"
        :style="{'transform': 'translateY(' + '-' + (100 * currentSlideIndex) + '%)'}"
    >
      <SliderItem
          v-for="item in slides"
          :key="item.id"
          :item="item"
      />
    </div>
  </div>
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