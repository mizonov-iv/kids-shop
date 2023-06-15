<template>
  <Navbar/>
  <RouterView/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {Navbar},
  data()  {
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