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
        <el-menu-item index="/paperDetail">人生礼仪</el-menu-item>
        <el-menu-item index="/paperDetail2">神话传说</el-menu-item>
        <el-menu-item index="/forum">论坛</el-menu-item>
        <el-menu-item index="/questioncustomer">问卷调查</el-menu-item>
          <el-menu-item index="/aboutme">关于我</el-menu-item>
        <el-dropdown class="dropdown" @command="handleCommand">
          <span class="el-dropdown-link">
            账号信息<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided command="register">登录/注册</el-dropdown-item>
            <el-dropdown-item divided command="userset"
              >修改信息</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
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
    handleCommand(command) {
       this.$router.push({
        //核心语句
        path: `/${command}` // "/register" //跳转的路径
      });
    }
  }
};
</script>
<style>
.el-dropdown {
    display: inline-block;
    position: relative;
    color: #fff !important;
    font-size: 16px !important;
}
.dropdown {
  position: relative;
  left: 25%;
  color: #fff;
  height: 60px;
  line-height: 60px;

}
.el-menu-demo {
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