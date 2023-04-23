<template>
  <div class="slider-item">
    <img class="item-img" :src="item.img_url" alt="">
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
  width: 400px;
}

.slider-item {
  width: 100%;
  height: 280px;
}

</style>