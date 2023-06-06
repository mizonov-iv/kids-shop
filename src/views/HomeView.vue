<template>
  <Slider
      :slides="sliderItems"
      :interval="3000"
  />
</template>

<script>
import Slider from "../components/Slider.vue";
import SliderItem from "../components/SliderItem.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {SliderItem, Slider, Navbar},
  data()  {
    return {
      sliderItems: [
        {
          title: "First Slide",
          img_url: "/img/1.jpg"
        },
        {
          title: "Second Slide",
          img_url: "/img/2.jpg"
        },
        {
          title: "Third Slide",
          img_url: "/img/3.jpg"
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>