<template>
  <div class="wrapper">
    <div  class="m-container m-padded-tb-big">
    <div class="ui container">

      <div class="ui stackable grid">
        <div class="eleven wide column">
          <div class="ui segment  ininin">
            <img  src="../assets/22222.jpg" alt="" class="ui rounded image">
          </div>
        </div>
        <div class="five wide column">
          <div class="ui attached segment">
            <p class="m-text">席晨阳 .</p>
            <p class="m-text">热爱编程，喜欢折腾，正在探索高效学习编程技术的方法...</p>
          </div>
          <div class="ui bottom attached segment">
            <a href="#" class="ui circular icon button"><i class="github icon"></i></a>
            <a href="#" class="ui wechat circular icon button"><i class="weixin icon"></i></a>
            <a href="#" class="ui qq circular icon button" data-content="865729312" data-position="bottom center"><i class="qq icon"></i></a>
          </div>
          <div class="ui wechat-qr flowing popup transition hidden">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1456111218,1910681625&fm=26&gp=0.jpg" alt="" class="ui rounded image" style="width: 110px">
          </div>
          </div>
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
@import "../assets/css/me.css";
@import "https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css";
.wrapper{
 height: 830px;
}
.ininin{
  display: flex;
  justify-content: center;
}
.segment > img{
  height: 650px;
}
.white-space {
             white-space:pre

}
</style>