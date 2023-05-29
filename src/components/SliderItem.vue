<template>
  <div class="slider-item">
<!--    <img class="item-img" :src="item.img_url" alt="">-->
    <p class="slider-title">
      {{item.title}}
    </p>
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
  background: darkgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slider-title {
  display: block;
  text-align: center;
  font-size: 64px;
  color: white;
}

</style>