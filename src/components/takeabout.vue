<template>
  <div class="wrapperTake">
    <article>
      <div class="knowledgeRepoWrapper">
        <article>
          <div class="knowledgeRepoContent">
            <div class="imgWrap user-icon">
              <a href="#"
                ><img
                  class="imgclass"
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202102%2F18%2F20210218234737_ce4cf.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617874530&t=d28db71527c210d53624b56fdec4ff60"
                  alt="用户个人头像"
              /></a>
            </div>
            <div class="article-title">
              <h4 class="article-content-title">中阳剪纸文化之旅</h4>
              <p class="user-editInfo">
                <span class="user-nickname">李子潺潺</span
                >&nbsp;&nbsp;发表于&nbsp;&nbsp;<span class="user-editTime"
                  >20小时前</span
                >
              </p>
            </div>
            <div class="article-content">
              <p>
              </p>

              <div
                class="article-content-img"
                @mouseenter="click"
                @mouseleave="leave"
              ></div>
              <img
                v-if = "seen == true"
                class=" seen=true ? imgImage : '' "
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2608568357,4601543&fm=26&gp=0.jpg"
                alt="文章配图"
              />
              <!-- 文字内容 -->
              <p>
                中阳剪纸是山西省中阳县的一种民间剪纸艺术。与当地传统民俗文化血肉相连，它以中阳当地民俗信仰、岁时节令、人生礼仪、神话传说为主要表现内容，其中既有以鱼、蛙、蛇、兔为主题的装饰纹样，也有配合岁时节令、人生礼仪的民俗剪纸，还有以民间神话为题材的剪纸作品。<a
                  href="javascript:void(0);"
                  class="showAllArticle"
                  >展开全文&nbsp;<i class="iconfont icon-2"></i
                ></a>
              </p>
            </div>
            <div class="article-collectTime">
              <p>收藏于&nbsp;<span>2021年3月1日</span></p>
            </div>
            <div class="article-operate">
              <div class="article-operate-item">
                <span class="collect"
                  ><i class="iconfont icon-star"></i
                  ><span class="article-operate-item-txt">收藏</span></span
                >
              </div>
              <div class="hr-line"></div>
              <div class="article-operate-item">
                <span class="share"
                  ><i class="iconfont icon-fenxiang1"></i
                  ><span class="article-operate-item-txt">3</span></span
                >
              </div>
              <div class="hr-line"></div>
              <div class="article-operate-item">
                <span class="like"
                  ><i class="iconfont icon-dianzan"></i
                  ><span class="article-operate-item-txt">点赞</span></span
                >
              </div>
            </div>
          </div>
        </article>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  data: {
      seen :true
  },
  methods: {
    click() {
      this.seen = true
      //  alert(this.seen);
    },
    leave() {
      this.seen = false
      // alert(this.num);
    }
  }
};
</script>
<style scoped>
@import "../assets/csstalk/animation.css";
@import "../assets/csstalk/common.css";
@import "../assets/csstalk/myCollect-zsk.css";
@import "../assets/csstalk/popupBox.css";
.imgImage{
  width: 400px;
  height: 500px;
  position: absolute;
  z-index: 999;
  border: 3px black solid;
}
.wrapperTake {
  margin: 0 auto;
  width: 60%;
}
.imgclass {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>