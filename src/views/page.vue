<template>
  <div class="wrap">
    <div class="w-middle">
      <div class="currentPosition">
        当前位置: <a href="">首页</a> > <a href="">神话传说</a> >
        <a href="">炎帝</a>
      </div>
      <div class="page">
        <div class="article-tittle">
          <p>中阳剪纸文化之旅</p>
          <br />

          <p class="pppp">
            <span>作者：席晨阳 &nbsp; 字数:1013 </span>
            <span>创建时间：2021年2月19日</span>
          </p>
          <br />

          <div class="page-content">
            <img src="../assets/product/01.png" alt="" />
            <br />
            <p>
              中阳剪纸是山西省中阳县的一种民间剪纸艺术。与当地传统民俗文化血肉相连，它以中阳当地民俗信仰、岁时节令、人生礼仪、神话传说为主要表现内容，其中既有以鱼、蛙、蛇、兔为主题的装饰纹样，也有配合岁时节令、人生礼仪的民俗剪纸，还有以民间神话为题材的剪纸作品。中阳剪纸多以红纸剪成，体现着喜庆、热烈的民俗气氛，有时也根据风俗习惯，运用紫、黑、黄、绿、蓝等彩色纸剪制作品。2006年5月20日，中阳剪纸经国务院批准列入第一批国家级非物质文化遗产名录。
            </p>
            <p>
              中阳民间剪纸在当地的流布可分为：南川河流域、刘家坪地区、西山边远地区三大地域。南川河流域的民间剪纸艺术风格细腻、典雅，是中阳民间剪纸的主流；刘家坪地区的民间剪纸艺术风格淳朴、刚健；西山边远地区的民间剪纸艺术风格粗犷、浑厚。尽管在造型风格上各有不同，但其共同的特点是：保留了原始艺术淳朴粗拙的特征，给人以庄严、神圣、质朴的美感。
            </p>
            <p>
              第一类是人物、植物、动物、器物造型，反映中阳地区所保留的远古人类童稚古朴的观念和信仰。如大量歌颂鱼、蛙、蛇、兔的主题纹样，反映了远古华夏先民图腾崇拜的痕迹；各种造型的娃娃组合纹样，是中华民族生命崇拜心理意识的积淀；一些象征吉祥的纹样，以对神物的崇拜，表达了劳动人民追求美满、幸福、平安、富裕生活的愿望。
              第二类主要表现人们在不同岁时节令和人生礼仪中的活动情景，形象地反映出中阳地区农民生产生活的习俗。
              第三类是以剪纸纹样记录了流传于民间的古老神话、传说和故事，并通过这些剪纸反映了中阳劳动人民朴素的道德观念、纯真的生活情趣和幽默感。
            </p>
            
          </div>
        </div>
      </div>
    </div>
    <Comment></Comment>
  </div>
</template>
<script>
import Comment from "../components/comment";
export default {
  components: {
    Comment: Comment
  },
}
</script>
<style scoped>
body {
  /* background: linear-gradient(30deg,#feac5e,#c779d0,#4bc0c8); */
  background: linear-gradient(
    180deg,
    rgba(241, 241, 241, 1),
    rgba(255, 255, 255, 0)
  );
  /* height: 1000px; */
}

.wrap {
  /* width: 1345px; */
  /* margin: auto; */
  background-color: #e7e7e7;
  /* background-color: Cyan; */
  /* height: 1000px; */
}

.wrap .w-middle {
  width: 800px;
  margin: auto;
}
.pppp {
  display: flex;
  justify-content: space-between;
}
.wrap .w-middle .currentPosition {
  color: black;
  padding-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}

.wrap .w-middle .currentPosition a {
}

.wrap .w-middle .page {
  background-color: #ddd;
  /* height: 1000px; */
  padding: 50px 30px;
}

.wrap .w-middle .page .article-tittle > p:first-of-type {
  font-size: 30px;
  font-weight: bolder;
}
.article-tittle{
  text-align: center;
}
.wrap .w-middle .page .article-tittle > p:last-of-type {
  font-size: 5px;
  color: rgb(153, 166, 196);
  /* font-weight: bolder; */
}

.wrap .w-middle .page .page-content {
  border-top: 1px solid rgb(153, 166, 196);
  padding-top: 25px;
}

.wrap .w-middle .page .page-content p {
  letter-spacing: 2px;
  line-height: 2em;
  font-size: 15px;
  text-indent: 2em;
}
.page-content > img {
  width: 550px;
  margin: auto;
  height: 300px;
}

.top {
  margin: auto;
  width: 1345px;
  /* background-color: linear-gradient(to bottom,rgb(),white); */
}

.top .bigLogo {
  float: left;
}

.navbar {
  float: left;
  width: 909px;
}

.radioLi {
  margin-top: 52px;
}

.radioLi li {
  width: 24%;
  display: inline-block;
  text-align: center;
  /* white-space: nowrap; */
}

.radioLi li:hover {
  background: rgb(233, 109, 113);
}

.money {
  position: fixed;
  top: 150px;
  left: 100px;
  cursor: pointer !important;
}

.money img {
  display: none;
  width: 200px;
}

.foot {
  /* margin-top看情况定 */
  /* margin-top: 500px; */
  background-color: rgb(38, 38, 38);
  height: 300px;
  padding-top: 30px;
}

.foot h4 {
  color: white;
}

.foot p {
  color: rgb(91, 91, 91);
  line-height: 20px;
  margin: 15px 0 15px 0;
}

.foot img {
  width: 150px;
}
</style>