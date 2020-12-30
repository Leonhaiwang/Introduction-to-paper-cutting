<template>
  <div class="home">
    <el-carousel :interval="5000" arrow="always" height="200px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img class="swiperImg" :src="item.url"  />
      </el-carousel-item>
    </el-carousel>
    <Button></Button>
    <Product></Product>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "../components/product";
import Button from "../components/button";
export default {
  name: "Home",
  data() {
    return {
      imgList: [
        { url: require("../assets/swiper03.jpg") },
        { url: require("../assets/swiper02.jpg") }
      ]
    };
  },
  components: {
    Product,
    Button
  }
};
</script>
<style scoped>

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
