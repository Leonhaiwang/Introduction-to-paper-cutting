<template>
  <div>
    <el-carousel :interval="5000" arrow="hover" autoplay loop height="680px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img class="swiperImg" :src="item.url" />
      </el-carousel-item>
    </el-carousel>
    <!--通知公告-->
    <div class="notice">
      <div class="center clear">
        <p>
          <span>通知公告：</span
          ><a href="">中阳剪纸文化成功申请非物质文化遗产</a>
        </p>
        <div class="search clear">
          <input type="text" placeholder="查找" />
          <a>搜索</a>
        </div>
      </div>
    </div>
    <!--main-->
    <div class="main">
      <div class="news center">
        <div class="title clear">
          <h2><span>最新</span>动态<br /></h2>
          <a href="">更多>></a>
        </div>
        <div class="news-lunbo clear">
          <div class="box">
            <ul>
              <li class="curr">
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1772347822,3773818446&fm=26&gp=0.jpg" alt="" />
              </li>
            </ul>
            <div class="pageN c">
              <span>中阳剪纸文化成功申请非物质文化遗产</span>
             
            </div>
            <div class="leftBtn">&#xe67d;</div>
            <div class="rightBtn">&#xe63d;</div>
          </div>
          <!--news详情-->
          <div class="newsDetail">
            <div class="newsDetail-top">
              <h2>中阳剪纸是山西省中阳县的一种民间剪纸艺术。</h2>
              <p>
                与当地传统民俗文化血肉相连，它以中阳当地民俗信仰、岁时节令、人生礼仪、神话传说为主要表现内容，其中既有以鱼、蛙、蛇、兔为主题的装饰纹样，也有配合岁时节令、人生礼仪的民俗剪纸，还有以民间神话为题材的剪纸作品。
              </p>
            </div>
            <ul>
              <li><a href="">中阳剪纸成功申遗</a></li>
              <li><a href="">中阳剪纸的内容也有相当丰富的文化内涵 </a></li>
             <li><a href="">中阳剪纸成功申遗</a></li>
              <li><a href="">中阳剪纸的内容也有相当丰富的文化内涵 </a></li>
              
             <li><a href="">中阳剪纸成功申遗</a></li>
              <li><a href="">中阳剪纸的内容也有相当丰富的文化内涵 </a></li>
            </ul>
          </div>
        </div>
      </div>
      <!--文化传人-->
      <div class="cultureC center">
        <div class="title clear">
          <h2><span>文化</span>传人<br /></h2>
          <a href="">更多>></a>
        </div>
        <ul class="clear">
          <li>
            <div class="p-img">
              <a href=""
                ><div class="innerTop">
                  <img
                    src="https://pics7.baidu.com/feed/8cb1cb1349540923775c39983f6d0a0db2de49dd.jpeg?token=1013b22e013b2a1d82ca671f518f96f9&s=FFB11B88C64232ED96B31C870300F088"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <h2>王计茹</h2>
            <p>中阳剪纸非遗传承人</p>
          </li>
          <li>
            <div class="p-img">
              <a href=""
                ><div class="innerTop">
                <img
                  src="http://5b0988e595225.cdn.sohucs.com/images/20180911/edc38b44b4ea43318986f8df8a44924a.jpeg"
                  alt=""
              /></div></a>
            </div>
            <h2>刘青云</h2>
            <p>中阳剪纸非遗传承人</p>
          </li>
          <li>
            <div class="p-img">
              <a href=""
                ><div class="innerTop"><img
                  src="https://pics7.baidu.com/feed/d31b0ef41bd5ad6e4ab8c8662dd0c3ddb7fd3c9f.jpeg?token=dd1868e0bba1b67469dcc6dea02cfa39"
                  alt=""
              /></div></a>
            </div>
            <h2>程英</h2>
            <p>中阳剪纸非遗传承人</p>
          </li>
        </ul>
      </div>
      <!--晋善晋美-->
      <div class="cultureJ">
        <div class="box">
          <h2>剪纸<span>文化</span></h2>
          <p>中国非物质文化遗产-中阳剪纸</p>
          <a href="">查看详细 >></a>
        </div>
        <div class="lineL"></div>
        <div class="lineR"></div>
      </div>
      <!--文化遗产-->
      <div class="cultureY center">
        <div class="title clear">
          <h2><span>剪纸</span>类型<br /><em>PaperCutting</em></h2>
          <a href="">更多>></a>
        </div>
        <ul>
          <li>
            <div class="img1 img">
              <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.zhongguofeng.com%2Fuploads%2Fallimg%2Fyuansu%2F33%2Fv4titkuiymw.jpg&refer=http%3A%2F%2Fwww.zhongguofeng.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617692686&t=d8535be6a9a1eba66933a7a7c73e5317"
                alt=""
              />
              <div class="shade">
                <h2>民俗信仰</h2>
                <p>山西民居砖雕是广泛流传于山西省境内 的的汉族传统砖雕技艺</p>
                <a href="">详细>></a>
              </div>
            </div>
          </li>
          <li>
            <div class="img2 img">
              <img src="../assets/img/index/cultureY2.png" alt="" />
              <div class="shade">
                <h2>神话传说</h2>
                <p>山西民居砖雕是广泛流传于山西省境内 的的汉族传统砖雕技艺</p>
                <a href="">详细>></a>
              </div>
            </div>
            <div class="img2 img">
              <img
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2691958638,1248455560&fm=26&gp=0.jpg"
                alt=""
              />
              <div class="shade">
                <h2>岁时节令</h2>
                <p>山西民居砖雕是广泛流传于山西省境内 的的汉族传统砖雕技艺</p>
                <a href="">详细>></a>
              </div>
            </div>
          </li>
          <li>
            <div class="img1 img">
              <img
                src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1017590076,512771555&fm=26&gp=0.jpg"
                alt=""
              />
              <div class="shade">
                <h2>人生礼仪</h2>
                <p>山西民居砖雕是广泛流传于山西省境内 的的汉族传统砖雕技艺</p>
                <a href="">详细>></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--在线展示-->
      <div class="show center">
        <div class="title clear">
          <h2><span>在线</span>展示<br /><em>Online display</em></h2>
          <a href="">更多>></a>
        </div>
      </div>
      <div class="showCulture">
        <div class="shade">
          <div class="center clear">
            <div class="video">
              <video
                class="videoLeft"
                width="550px"
                height="390px"
                loop="loop"
                controls="controls"
                autoplay="autoplay"
                src="http://vfx.mtime.cn/Video/2019/03/21/mp4/190321153853126488.mp4"
                type="video/mp4"
              ></video>
            </div>
            <div class="introduce">
              <h3>中阳民间剪纸</h3>
              <p>
               中阳民间剪纸在当地的流布可分为：南川河流域、刘家坪地区、西山边远地区三大地域。南川河流域的民间剪纸艺术风格细腻、典雅，是中阳民间剪纸的主流；刘家坪地区的民间剪纸艺术风格淳朴、刚健；西山边远地区的民间剪纸艺术风格粗犷、浑厚。尽管在造型风格上各有不同，但其共同的特点是：保留了原始艺术淳朴粗拙的特征，给人以庄严、神圣、质朴的美感。
              </p>
              <a href="">详细>></a>
            </div>
          </div>
        </div>
      </div>
      <!--文化商城-->
      <div class="cultureS center">
        <div class="title clear">
          <h2><span>在线</span>展示<br /><em>Online display</em></h2>
          <a href="">更多>></a>
        </div>
        <ul>
          <li>
            <div class="p-img">
              <img src="../assets/img/index/cultureS1.png" alt="" />
            </div>
            <p>中阳剪纸</p>
          </li>
          <li>
            <div class="p-img">
              <img src="../assets/img/index/cultureS2.png" alt="" />
            </div>
            <p>中阳剪纸</p>
          </li>
          <li>
            <div class="p-img">
              <img src="../assets/img/index/cultureS3.png" alt="" />
            </div>
            <p>中阳剪纸</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        { url: require("../assets/swiper03.jpg") },
        { url: require("../assets/swiper02.jpg") }
      ]
    };
  }
};
</script>

<style scoped>
@import "../assets/css/public.css";
@import "../assets/css/style.css";
.swiperImg{
  width: 100%;
  height: 100%;
  
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 750px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.innerTop > img {
  transition: 0.5s;
  position: relative;
  width: 398px;
  height: 196px;
  top: 0px;
  left: 0px;
  padding: 5px;
}
.innerTop > img:hover {
  position: relative;
  width: 398px;
  height: 196px;
  top: -5px;
  left: -5px;
  transform: scale(1.05);
  /* animation:flip; 
  animation-duration: 1s;  */
}
.innerTop {
  overflow: hidden;
  display: block;
  position: relative;
  width: 398px;
  height: 196px;
}
</style>