<template>
  <div id="app">
      <Nav></Nav>
      <router-view class = "middle"></router-view>
      <BottomBar class = "bottomBar"></BottomBar>
  </div>
</template>
<script>
import Nav from './components/nar'
import Home from './views/Home'
import BottomBar from "./components/bottomBar"
export default {
  components:{
    Nav,
    Home,
    BottomBar
  },
  data() {
    return {
    }
  },
  
}
</script>
<style>
  .bottomBar{
    position: relative;
    bottom: 0px;
  }
  .middle{
    padding-top: 60px;
  }
</style>
