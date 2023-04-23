<template>
  <Slider
      :slides="sliderItems"
  />
</template>

<script>
import Slider from "./components/Slider.vue";
import SliderItem from "./components/SliderItem.vue";
export default {
  components: {SliderItem, Slider},
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

<!--  <div class="container snap-y snap-mandatory overflow-y-scroll	h-screen scroll-m-1" style="scroll-snap-type: y mandatory">-->
<!--    <section class="h-screen flex justify-center items-center bg-slate-200 snap-start">-->
<!--      <h1>First Page</h1>-->
<!--    </section>-->
<!--    <section class="h-screen flex justify-center items-center bg-slate-300 snap-start">-->
<!--      <h1>Second Page</h1>-->
<!--    </section>-->
<!--    <section class="h-screen flex justify-center items-center bg-slate-400 snap-start">-->
<!--      <h1>Third Page</h1>-->
<!--    </section>-->
<!--    <section class="h-screen flex justify-center items-center bg-slate-500 snap-start">-->
<!--      <h1>Footer</h1>-->
<!--    </section>-->
<!--    <section class="pt-24 container flex flex-col justify-items-center snap-start h-screen">-->
<!--      <p class="block text-center uppercase mb-16">Присоединяйтесь к нам</p>-->
<!--      <ul class="p-4 flex flex-wrap justify-center">-->
<!--        <li class="m-2">-->
<!--          <a href="">TELEGRAM</a>-->
<!--        </li>-->
<!--        <li class="m-2">-->
<!--          <a href="">INSTAGRAM</a>-->
<!--        </li>-->
<!--        <li class="m-2">-->
<!--          <a href="">ВКОНТАКТЕ</a>-->
<!--        </li>-->
<!--        <li class="m-2">-->
<!--          <a href="">YOUTUBE</a>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </section>-->
<!--  </div>-->