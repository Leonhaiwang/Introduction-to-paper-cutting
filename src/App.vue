<template>
  <div id="app">
      <Nav></Nav>
      <!-- <Home></Home> -->
      <!-- router-view -->
      <router-view></router-view>
  </div>
</template>
<script>
import Nav from './components/nar'
import Home from './views/Home'
export default {
  components:{
    Nav,
    Home
  },
  data() {
    return {
      
    }
  },
}
</script>
<style>


</style>
