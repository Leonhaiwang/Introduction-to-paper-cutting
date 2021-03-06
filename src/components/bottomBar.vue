<template>
  <div class="bottomBar">
    <div class="bottomTitle">
      <span class="pTitle">
        <a href="">网站地图</a> |
        <a href="">关于我们</a>|
        <a href="">联系我 </a>|
        <a href="">版权声明</a>
      </span>
    </div>
    <div class="middleBottom">
      <div class="middleInner">
        <div class="middleLeft">学校：山西农业大学信息学院</div>
        <div class="middleRight">视觉1703 席晨阳 2017600421</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.middleLeft{
  margin-right: 100px;
}
.middleInner{
  display: flex;
  justify-content:space-between;
}
.middleBottom{
  display: flex;
  justify-content: center;
  margin-top: 25px;
  font-family: "微软雅黑";
  color: #333333ad;
  line-height: 1.8;
  font-size: 14px;
}
.pTitle > a{
  margin-left: 15px;
  margin-right: 15px;
}
.bottomTitle {
  margin-top: 25px;
  font-family: "微软雅黑";
  color: #333333ad;
  line-height: 1.8;
  font-size: 14px;
  text-align: center;
}
.bottomBar {
  width: 100%;
  height: 130px;
  border-top: 1px #858d90d9 solid;
  background-image: url("http://www.ihchina.cn/Public/static/themes/image/temp/png14.png");
}
</style>