<template>
  <div class="container p-4 px-8 flex justify-between">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

    <svg class="w-24" viewBox="0 0 132 55" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path>
    </svg>

    <div class="flex flex-col justify-items-end">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <p class="underline uppercase underline-offset-2 text-xs mt-6">Поиск</p>
    </div>
  </div>

    <swiper
        class="border w-96 m-auto"
        :modules="modules"
        :space-between="0"
        :loop="false"
        :pagination="false"
        :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
    >
      <swiper-slide
          v-for="item in swiperItems"
          class=" m-auto"
      >
        <div>
          <p>{{item.title}}</p>
          <img :src="item.img_url" :alt="item.title">
        </div>
      </swiper-slide>
    </swiper>

</template>

<script>

import {Swiper, SwiperSlide} from "swiper/vue";
import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {ref} from "vue";

export default {
  components: {Swiper, SwiperSlide},
  setup() {
    const slides = ref([
      "https://picsum.photos/id/1032/900/400",
      "https://picsum.photos/id/1033/900/400",
      "https://picsum.photos/id/1037/900/400",
      "https://picsum.photos/id/1035/900/400",
      "https://picsum.photos/id/1036/900/400",
    ])
    const swiperItems = ref([
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
    ])
    return {modules: [Pagination, Autoplay, Navigation], swiperItems, slides}
  }
}
</script>

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