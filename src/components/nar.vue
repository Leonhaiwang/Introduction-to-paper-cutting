<template >
  <div class="nav">
    <div class="topBar">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#ed1b2300"
        text-color="#fff"
        active-text-color="#fafd83"
        router
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/news">民俗信仰</el-menu-item>
        <el-menu-item index="/page">岁时节令</el-menu-item>
        <el-menu-item index="4">人生礼仪</el-menu-item>
        <el-menu-item index="5">神话传说</el-menu-item>
        <el-menu-item index="5">论坛</el-menu-item>
        <el-menu-item index="6">问卷调查</el-menu-item>
        <span class="loginBar" @click="limie">登录 | 注册</span>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    limie() {
      this.$router.push({  //核心语句
        path:'/register',   //跳转的路径
      })
    }
  }
};
</script>
<style>
.el-menu-demo{
  display: flex;
  justify-content: center;
}
.topBar {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 60px;
  background-image: url(../assets/topbarimage.jpg);
  background-size: 100%;
  /* background-origin: left top; */
  line-height: 60px;
  color: seashell;
  /* padding-left: 300px; */
  z-index: 999;
}
.loginBar {
  position: relative;
  font-size: 18px;
  color: #fff;
  left: 25%;
}
</style>