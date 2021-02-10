<template>
  <div id="button">
    <div class="btnwrap">
      <el-button type="danger">最新剪纸</el-button>
      <el-button plain>全部</el-button>
      <el-button type="success" plain>民俗信仰</el-button>
      <el-button type="warning" plain>岁时节令</el-button>
      <!-- <el-button type="info"  plain>神话传说</el-button> -->
      <el-button type="danger" class="danger" round>上传作品</el-button>
    </div>

  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>
<style >
#button {
  height: 65px;
  text-align: center;
  line-height: 65px;
}
el-button {
  margin-left: 30px !important;
}
.danger{
  position: relative;
  left: 15%;
}
.hold_events {
  font: normal 14px/1.7 "微软雅黑";

  right: 10px;
  display: block;
  width: 106px;
  height: 38px;
  line-height: 38px;
  border-radius: 5px;
  color: #fff;
  background: #f43700;
  font-weight: 600;
}
</style>
