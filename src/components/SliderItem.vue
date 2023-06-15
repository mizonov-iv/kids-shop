<template>
  <div class="slider-item">
<!--    <img class="slider-item-img" :src="item.img_url" alt="">-->
    <p class="slider-item-title">{{item.title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>