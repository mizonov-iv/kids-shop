<template>
  <div class="slider-item">
    <img class="item-img" :src="item.img_url" alt="">
    <p>{{item.title}}</p>
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

<style scoped>

.item-img {
  display: block;
  width: 600px;
  margin: 0 auto;
}

.slider-item {
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

</style>