<template>
  <Navbar/>
  <div class="container">
    <RouterView/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {Navbar},
  data() {
  },
}
</script>