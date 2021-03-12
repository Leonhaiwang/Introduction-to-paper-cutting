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
          </div>
        </div>
        <div class="ui form">
          <div class="field">
            <textarea class="textareabottom" name="content" placeholder="请输入评论信息..."></textarea>
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
            <div class="buttonBottom">
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
  margin-top: -30px;
}
.textareabottom{
  height: 40px;
}
.ui.form textarea:not([rows]) {
    height: 0em;
    min-height: 8em;
    max-height: 24em;
}
.buttonBottom{
 left: 300px;
}

</style>