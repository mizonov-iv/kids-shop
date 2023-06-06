<template>
  <div class="wrapper">
    <div
        class="slider"
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

<style scoped>

.wrapper {
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: all ease 0.5s;
}

</style>