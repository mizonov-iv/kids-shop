<template>
<!--  <Slider-->
<!--      :slides="sliderItems"-->
<!--      :interval="4000"-->
<!--  />-->

  <!-- Slider main container -->
  <div class="swiper" ref="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <p class="slider-item-title">Slide 1</p>
      </div>
      <div class="swiper-slide">
        <p class="slider-item-title">Slide 2</p>
      </div>
      <div class="swiper-slide">
        <p class="slider-item-title">Slide 3</p>
      </div>
      <div class="swiper-slide">
        <p class="slider-item-title">Slide 4</p>
      </div>
      <div class="swiper-slide">
        <p class="slider-item-title">Slide 5</p>
      </div>
    </div>

    <!-- If we need navigation buttons -->
<!--    <div class="swiper-button-prev"></div>-->
<!--    <div class="swiper-button-next"></div>-->

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>

</template>

<script>
import Slider from "../components/Slider.vue";
import SliderItem from "../components/SliderItem.vue";
import Navbar from "../components/Navbar.vue";

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

export default {
  components: {SliderItem, Slider, Navbar, },
  mounted() {
    new Swiper(this.$refs.swiper, {
      // Optional parameters
      direction: 'vertical',
      loop: false,
      mousewheel: true,
      sliderPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: true,
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
        type: 'progressbar',
      },
    })
  },
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

<style>
</style>