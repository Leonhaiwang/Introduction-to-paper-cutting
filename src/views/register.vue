<template>
  <div class="register">
    
   	<section>
					<div class="loginBox">
						<form>
							<div class="loginInput">
								<div class="loginInput-tip warnTip">
									<!-- <div class="imgWrap warnTipImg"><img src="" alt="您的输入有误"></div> -->
									<span>亲，此项必须填哦</span>
								</div>
								<div class="imgWrap loginInput-icon"><img src="../assets/img/loginUser.png"></div>
								<input type="text" name="" placeholder="请输入您的常用邮箱">
							</div>
							<div class="loginInput">
								<div class="loginInput-tip warnTip">
									<!-- <div class="imgWrap warnTipImg"><img src="" alt="您的输入有误"></div> -->
									<span>密码必须6-16位哦</span>
								</div>
								<div class="imgWrap loginInput-icon"><img src="../assets/img/loginPw.png"></div>
								<input type="password" name="" placeholder="请输入6-16位密码">
							</div>
							<div class="loginInput">
								<div class="loginInput-tip warnTip">
									<div class="imgWrap warnTipImg"><img src="../assets/img/loginTip.png" alt="您的输入有误"></div>
									<span>两次输入不一致哦</span>
								</div>
								<div class="imgWrap loginInput-icon"><img src="../assets/img/loginPw.png" ></div>
								<input type="password" name="" placeholder="请再次输入密码">
							</div>
							<div class="loginAbPW">
								<label id="remberPW">
									<input type="checkbox" checked>
									同意<a href="#" class="anchor"><span>&quot;隐私条款&quot;</span></a>，<a href="#" class="anchor">&quot;用户须知&quot;</a>和<a class="anchor" href="#">&quot;隐私政策&quot;</a>
								</label>
							</div>
							<div class="btnWrap">
								<button @click="gologin">注册</button>
							</div>
						</form>
						<div class="loginA">
							<a href="#" class="anchor">已有账号，立即登录</a>
						</div>
					</div>
				</section>
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
@import "../assets/csstalk/animation.css";
@import "../assets/csstalk/common.css";
@import "../assets/csstalk/myCollect-zsk.css";
@import "../assets/csstalk/normalize.css";
/* @import "../assets/csstalk/popupBox.css"; */
/* @import "../assets/csstalk/register.css.css"; */
.main{
   width: 100%; 
}





/*================================== regsiterNav开始============================= */
.registerNav{
    border:1px solid #ccc;
    width: 591px;
    background: #fff;
    height: 48px;
    display: table;
    margin:3% auto;
}
.registerNav li{
     position: relative;
    position: relative;
    width: 33.3%;
    float: left;
    line-height: 48px;
    text-align: center; 
    list-style: none;
}
.registerNav li:before{
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-left: 15px solid #000;
    border-top: 24px solid transparent;
    border-right: none;
    border-bottom: 24px solid transparent;
    left: 0;
    top: 0;
    z-index: 3;
}
.registerNav_h4{
    font-weight: normal;
    color:#6B6B6B;
}
.registerNav li:after{
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-left: 15px solid #fff;
    border-top: 24px solid transparent;
    border-right: none;
    border-bottom: 24px solid transparent;
    right: -15px;
    top: 0;
    z-index: 24;
}
.registerNav li:first-child:before{
    display: none;
}
.registerNav li:last-child:after{
    display: none;
}
.registerNav li.current{
    background: #1087EB;
}
.registerNav li.current:after{
    border-left-color: #1087EB;
}
.registerNav li.current h4{
    color:#fff;
}
/*==============-================== regsiterNav结束============================ */




.loginBox{
    padding-top: 20px;
    text-align: center;
    margin:3% auto;
    display: table;
    position: relative;
    width: 380px;
    height: 440px;
    background: #fff;
    border-radius: 5px;
    border:1px solid #ABABAB;
}
.loginInput{
    margin-top: 43px;
    position: relative;
}
.loginInput input{
    width: 100%;
    height: 40px;
    background: #eee;
    border-radius: 5px;
    -moz-border-radius:5px;
    -webkit-border-radius: 5px;
    text-indent: 3em;
}
.loginInput-icon{
    position: absolute;
    transform: translateY(50%);
    margin-left: 1em;
}
.warnTip{
    font-size: 12px;
    color:#FE0B08;
}
.loginInput-tip{   
    position: absolute;
    right: 0;
    top:-2em;
}
.warnTipImg{
    vertical-align: 1px;
}
.loginInput,
.btnWrap,
.loginAbPW{
    width:  287px;
    display: inline-block;
}




.loginAbPW{
    margin-top: 20px;
    height: 1.1em;
}
.loginAbPW label{
    color: #727272;
    position: relative;
    float: left;
    /*     用户不选中文本，造成不必要的麻烦 */
   
}
.loginAbPW a{
    color:#727272;
}
.loginAbPW i{    
    vertical-align: middle;
    margin-right: 0.5em;
}
.icon-check1{
    color:#1087EB;
}
.icon-unchecked{
    color: #ddd;
}
.loginAbPW input{
/*     opacity: 0; */
    position: absolute;
    left: 0;
    z-index: 2;
}


.btnWrap{
    margin-top: 30px;
}
.btnWrap button{
    width: 100%;
    height: 40px;
    color: #fff;
    background: #1087EB;
    border-radius: 5px;
     -moz-border-radius:5px;
    -webkit-border-radius: 5px;
}
.loginA{
    padding-top: 30px;
}
.loginA a{
    color:#666;
}



.enableBox{
    padding-top: 40px;
}
.enableBoxIcon{
    margin:30px auto;
}
.enableOl{
    width: 287px;
    margin:0 auto;
    text-align: left;
}
.enableOl a{
    text-decoration: none;
    color:#1087EB;
}
.enableOl li{
    list-style-position: inside;
    font-size: 12px;
    color:#888;
    margin-top:10px;
}
.enableOl h3{
    font-weight: normal;
}
.successMsg{
    font-size: 24px;
    line-height: 1.2;
}
.successBox .btnWrap{
    margin-top: 70px;
}

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