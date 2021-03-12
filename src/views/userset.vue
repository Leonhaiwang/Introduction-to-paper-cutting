<template>
  <div>
    <div class="main">
			<main>


				<!-- 左侧导航栏 -->
				<div class="navWrap">
					<ul class="main-nav">
						<li>
							<a href="#"><span class="main-nav-Ltxt">我的设置</span><span class="nav-Rtxt">80%</span></a>
							<ul class="sub-nav">
								<li>
									<a href="#"><span>个人信息</span><span class="nav-Rtxt">80%</span></a>
								</li>
								<li>
									<a href="#"><span>账号设置</span><span class="nav-Rtxt">100%</span></a>
								</li>
							</ul>
						</li>
					</ul>
				</div>



				<!-- 右侧主要内容 -->
				<div class="mainContent">
					<!-- 个人信息 -->
					<section class="knowledgeRepo knowledgeRepo-colTagWrap">


						<!-- 小标题 -->
						<h4 class="knowledgeRepoWrapper-title"><a href="#">我的设置</a>&nbsp;&gt;&nbsp;个人信息</h4>

						<!-- 我的信息 -->
						<form>
							<div class="knowledgeRepoWrapper">
								<div class="knowledgeRepoContent knowledgeRepo-colTag">
									<!-- 个人信息展示 -->
									<div class="knowledgeRepo-colTag-show userSet-info">
										<!-- 头像 -->
										<div class="userSet-info-portrait-wrap userSet-info-item">
											<!-- 头像图片 -->
											<div class="userSet-info-portrait"></div>
											<!-- 修改头像按钮 -->
											<a href="javascript:;" class="userSet-info-portrait-btn">修改头像
											    <input type="file" name="" id=""  accept="image/png,image/jpeg,image/gif">
											</a>
										</div>
										<!-- 昵称 -->
										<div class="userSet-info-nickname-wrap userSet-info-item">
											<label><span class="userSet-info-label">昵称：</span><input type="text" name="" placeholder="幸福金姿兰"></label>
										</div>
										<!-- 性别 -->
										<div class="userSet-info-sex-wrap userSet-info-item">
											<span class="userSet-info-label">性别：</span>
											<div>
												<label class="userSet-info-sex-item"><input type="radio" name="user-sex"><span>保密</span></label>
												<label class="userSet-info-sex-item"><input type="radio" name="user-sex" checked><span>男</span></label>
												<label class="userSet-info-sex-item"><input type="radio" name="user-sex"><span>女</span></label>
                        
											</div>
										</div>
                    <div class="userSet-info-nickname-wrap userSet-info-item">
											<label><span class="userSet-info-label">签名：</span><input type="text" name="" placeholder="请输入您的签名"></label>
										</div><div class="userSet-info-nickname-wrap userSet-info-item">
											<label><span class="userSet-info-label">地址：</span><input type="text" name="" placeholder="请输入您的地址"></label>
										</div>
									</div>
									<!-- 个人信息操作 -->
									<div class="knowledgeRepo-colTag-operate">
										<div>
											<div class="knowledgeRepo-colTag-operate-input filterInput tooltip" title="我的个人信息完成程度">
												<input type="hidden" class="slider single-slider finish-slider" value="60"  />
											</div>
											<div class="knowledgeRepo-colTag-operate-btn editTag-btn"><button class="btn"><i class="iconfont icon-bianji"></i><span>编辑</span></button></div>
                      <div class="knowledgeRepo-colTag-operate-input filterInput tooltip" title="我的个人信息完成程度">
												<input type="hidden" class="slider single-slider finish-slider" value="60"  />
											</div>
                      <div class="knowledgeRepo-colTag-operate-input filterInput tooltip" title="我的个人信息完成程度">
												<input type="hidden" class="slider single-slider finish-slider" value="60"  />
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>

					<!-- 账号设置-->
					<section class="knowledgeRepo knowledgeRepo-colItemWrap">


						<!-- 小标题 -->
						<h4 class="knowledgeRepoWrapper-title knowledgeRepo-col-title"><a href="#">我的设置</a>&nbsp;&gt;&nbsp;账号设置</h4>

						<!-- 账号设置 -->
						<aside>
							<div class="knowledgeRepo-filter userSet-account">
								<div>
									<div class="knowledgeRepo-filter-btn knowledgeRepo-filter-btn-current">
										<button class="btn" id="pwModi-btn">修改密码</button>
									</div>
									<div class="knowledgeRepo-filter-btn knowledgeRepo-filter-btn-current">
										<button class="btn">注销</button>
									</div>
									<div class="knowledgeRepo-filter-input filterInput">
										<input type="text" name="" placeholder="查找我的收藏"><i class="knowledgeRepo-colTag-operate-searchicon"><img src="images/search-gray.png" alt=""></i>
									</div>
								</div>
							</div>
						</aside>


						
					</section>
				</div>
				
				<!-- 半透明遮罩 -->
				<div style="position: fixed; top: 0px; left: 0px; bottom: 0px; right:0px; background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.6; filter: alpha(opacity:60); z-index: 100; display: none;" id="mask"></div>
				
				
				<!-- 修改密码弹出框 -->
				<div class="PopupBox PwModi-popbox" style="display: none;">
				    <h4 class="PopupBox-title title">修改密码</h4>
				    <button class="btn closePrompt"><i class="xk-cuo xsxkxtFont"></i></button>
				    <div class="pwModiContent">
				        <div>
				            <label><span class="left">验证旧密码：</span><input type="password" id="oldPwd" placeholder="请输入6-12位的旧密码"></label>
				        </div>
				        <div>
				            <label><span class="left">请设置新密码：</span><input type="password" id="newPwd" placeholder="请输入6-12位的新密码"></label>
				        </div>
				        <div>
				            <label><span class="left">再次输入新密码：</span><input type="password" id="confirmPwd" placeholder="请输入6-12位的新密码"></label>
				        </div>
				        <button class="btn PwModi-popbox-subBtn" type="button" onclick="editPwd();" id="qrxg">确认</button>
				    </div>
				    <div id="errorPwd" style="font-size: 14px; color: red; text-align:center;display:none"></div>
				</div> 

			</main>
		</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
@import "../assets/csstalk/animation.css";
@import "../assets/csstalk/common.css";
@import "../assets/csstalk/myCollect-zsk.css";
@import "../assets/csstalk/normalize.css";
@import "../assets/csstalk/popupBox.css";
@import "../assets/csstalk/userSet.css";


</style>