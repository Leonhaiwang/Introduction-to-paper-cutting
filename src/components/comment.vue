<template>
   <div id="comment-container" class="ui bottom attached segment">
        <!--留言区域列表-->
        <div class="ui teal segment">
          <div class="ui threaded comments">
            <!-- <h3 class="ui dividing header">评论</h3> -->
            <div class="comment">
              <a class="avatar">
                <img src="https://unsplash.it/100/100?image=1005">
              </a>
              <div class="content">
                <a class="author">李子</a>
                <div class="metadata">
                  <span class="date">2020年5月21日 at 5:42PM</span>
                </div>
                <div class="text">
                  真好看
                </div>
                <div class="actions">
                  <a class="reply">回复</a>
                </div>
              </div>
            </div>
            <div class="comment">
              <a class="avatar">
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg">
              </a>
              <div class="content">
                <a class="author">一朵花</a>
                <div class="metadata">
                  <span class="date">2020年5月21日 at 5:42PM</span>
                </div>
                <div class="text">
                  <p>中阳剪纸出版，这是我们的家乡，我们的骄傲</p>
                </div>
                <div class="actions">
                  <a class="reply">回复</a>
                </div>
              </div>
              <div class="comments">
                <div class="comment">
                  <a class="avatar">
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3782597585,1782921943&fm=26&gp=0.jpg">
                  </a>
                  <div class="content">
                    <a class="author">马上好</a>
                    <div class="metadata">
                      <span class="date">刚刚</span>
                    </div>
                    <div class="text">
                     真心为家乡感到骄傲
                    </div>
                    <div class="actions">
                      <a class="reply">回复</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment">
              <a class="avatar">
                <img src="https://unsplash.it/100/100?image=1005">
              </a>
              <div class="content">
                <a class="author">我是王子文</a>
                <div class="metadata">
                  <span class="date">刚刚</span>
                </div>
                <div class="text">
                  感谢大家关注我们的家乡文化，在我们的家乡的文化下的影响
                </div>
                <div class="actions">
                  <a class="reply">回复</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui form">
          <div class="field">
            <textarea name="content" placeholder="请输入评论信息..."></textarea>
          </div>
          <div class="fields">
            <div class="field m-mobile-wide m-margin-bottom-small">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="nickname" placeholder="姓名">
              </div>
            </div>
            <div class="field m-mobile-wide m-margin-bottom-small">
              <div class="ui left icon input">
                <i class="mail icon"></i>
                <input type="text" name="email" placeholder="邮箱">
              </div>
            </div>
            <div class="field  m-margin-bottom-small m-mobile-wide">
              <button class="ui teal button m-mobile-wide"><i class="edit icon"></i>发布</button>
            </div>
          </div>

        </div>
      </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
@import "../assets/css/animate.css";
@import "../assets/css/me.css";
@import "../assets/css/typo.css";
@import "https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css";
@import "../assets/css/tocbot.css";
@import "../assets/css/me.css";
@import "../assets/css/prism.css";

#comment-container{
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
}

</style>