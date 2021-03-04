<template>
  <div class="register">
    
    <div class="registerInner">
      <div class="topHtml">
        账户登录
      </div>
      <div class="input">
        <div class="inputName">
          用户名:
        </div>
        <input class="inputvalue" type="text" placeholder="手机号/邮箱">
      </div>
      <div class="input">
        <div class="inputName">
          账号:
        </div>
        <input class="inputvalue" type="text" placeholder="密码">
      </div>
      <div class="input">
        <div class="inputName">
          密码:
        </div>
        <input class="inputvalue" type="text" placeholder="手机号/邮箱">
      </div>

      <div class="forgetpassword">
        <a>忘记密码？</a>
      </div>
      <el-button class = "button" type="danger" round @click="gologin">登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data:{
    return:{
        input: ''
    }
  },
  methods:{
    gologin(){
      this.$router.push({  //核心语句
        path:'/',   //跳转的路径
      })
    }
  }
};
</script>
<style scoped>
.button{
  margin-top: 30px;
  width: 250px;
}
.forgetpassword{
  color: #fff;
  display: flex;
  justify-content: flex-end;
}
.inputvalue{
  width: 250px;
  height: 35px;
  border-radius: 5px;
  text-align: center;
}
.inputName{
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 28px;
  display: inline-block;
}
.input{
  margin: 20px;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}                                                                                                                                                    
.topHtml {
  display: inline-block;
  margin-top: 25px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 38px;
}
.register {
  background-image: url("http://www.ihchina.cn/Public/static/themes/image/jjl/solar_terms13.jpg");
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.registerInner {
  background-color: #6b686854;
  width: 450px;
  height: 450px;
  margin: 0 auto;
  border-radius: 15px;
  text-align: center;
}
</style>