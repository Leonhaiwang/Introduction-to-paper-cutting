<template>
  <div class="body">
    <div class="title">
      <div class="toptitle">剪纸（中阳剪纸）</div>
      <div class="bottomtitle">
        来源：中国非物质文化遗产网 创建时间：2021.02.29
      </div>
    </div>
    <div class="imageIII">
      <div class="block">
        <el-carousel
          trigger="click"
          height="440px"
          loop
          interval="3000"
          @change="change"
        >
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <el-image :src="item.url"></el-image>
          </el-carousel-item>
        </el-carousel>
        <div ref="lili" class="detail" >
          剪纸进课堂授课现场（摄影：郭晓声）
        </div>
      </div>
    </div>
    <div class="bottomnews">

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        {
          url:
            "http://www.ihchina.cn/Uploads/Picture/2019/12/29/s5e08822d62f2b.jpg",
          p: "AAAAAAAAAAAAAAAaa"
        },
        {
          url:
            "http://www.ihchina.cn/Uploads/Picture/2019/12/29/s5e08822d7d2b1.jpg",
          p: "AAAAA"
        },
        {
          url:
            "http://www.ihchina.cn/Uploads/Picture/2019/12/29/s5e08822d2d1cf.jpg"
        }
      ]
    };
  },
  methods: {
    change() {
      this.$refs.lili.innerHTML = "中阳剪纸出版成果（摄影：郭晓声）"
    }
  }
};
</script>
<style scoped>
.bottomnews{
  height: 100px   ;
}
.detail {
  color: #fff;
  text-align: left;
  font-size: 22px;
  line-height: 1.5em;
  max-height: 3em;
  margin-bottom: 50px;
  overflow: hidden;
  padding-right: 100px;
  margin-top: 25px;
}
.bottomtitle {
  color: #818484;
}
.title {
  padding-top: 40px;
  padding-bottom: 26px;
  text-align: center;
}
.toptitle {
  font-family: "微软雅黑";
  font-size: 24px;
  margin-bottom: 24px;
}
.body {
  background: url("http://www.ihchina.cn/Public/static/themes/image/temp/png14.png") ;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.block {
  width: 884px;
  height: 620px;
  margin: 0 auto;
}
.imageIII {
  margin: 0 auto;
  width: 1222px;
  height: 616px;

  padding-top: 65px;
  background: url("http://www.ihchina.cn/Public/static/themes/image/jjl/bg1.jpg")
    no-repeat 0 0;
  background-size: 100% 100%;
}
</style>