<template>
  <Navbar/>
  <RouterView/>
<!--  <Slider-->
<!--      :slides="sliderItems"-->
<!--      :interval="3000"-->
<!--  />-->
</template>

<script>
import Slider from "./components/Slider.vue";
import SliderItem from "./components/SliderItem.vue";
import Navbar from "./components/Navbar.vue";
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

<style>
.benefits-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 18px auto;
  width: 161px;
  height: 48px;
  background: #FFFFFF;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  border: none;
  text-decoration: none;
}
</style>