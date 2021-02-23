<template>
  <div id="app">
      <!-- <Nav></Nav> -->
      <!-- <Home></Home> -->
      <!-- router-view -->
      <router-view></router-view>
      <!-- <ButtomBar class = ""></ButtomBar> -->
  </div>
</template>
<script>
import Nav from './components/nar'
import Home from './views/Home'
import ButtomBar from "./components/bottomBar"
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
