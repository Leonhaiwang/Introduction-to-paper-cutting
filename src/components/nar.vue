<template >
  <div class="nav">
    <div class="topBar">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#e6e6e600"
        text-color="#fff"
        active-text-color="#409EFF"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="1">民俗信仰</el-menu-item>
        <el-menu-item index="1">岁时节令</el-menu-item>
        <el-menu-item index="1">人生礼仪</el-menu-item>
        <el-menu-item index="1">神话传说</el-menu-item>
        <el-menu-item index="1">论坛</el-menu-item>
        <el-menu-item index="1">问卷调查</el-menu-item>
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
      alert("11");
    }
  }
};
</script>
<style>
.topBar {
  position: sticky;
  width: 100%;
  height: 60px;
  background-image: url(../assets/topbarimage.jpg);
  background-size: 100% 100%;
  background-origin: left top;
  line-height: 60px;
  color: seashell;
  padding-left: 300px;
}
.loginBar {
  position: relative;
  font-size: 18px;
  color: #fff;
  left: 25%;
}
</style>