<template>
  <div class="wrapper">
    <div class=" all_660">
      <div class="questionnaireSummary_box">
        <p>问卷简介</p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="questionnaireSummary"
        ></textarea>
      </div>
      <div class="yd_box">
        <div class="movie_box" name="2">
          <ul class="wjdc_list">
            <li>
              <div class="tm_btitlt">
                <i class="nmb"></i
                ><i class="btwenzi">你经常关注剪纸有关消息吗</i>
              </div>
            </li>
            <li>
              <label>
                <input name="a" type="radio" value="" />
                <span>经常</span></label
              >
            </li>
            <li>
              <label>
                <input name="a" type="radio" value="" />
                <span>偶尔</span></label
              >
            </li>
            <li>
              <label>
                <input name="a" type="radio" value="" />
                <span>不感兴趣</span></label
              >
            </li>
            <li>
              <label>
                <input name="a" type="radio" value="" />
                <span>从来不看</span></label
              >
            </li>
          </ul>
          <div class="dx_box" data-t="0"></div>
        </div>
        <div class="movie_box" name="2">
          <ul class="wjdc_list">
            <li>
              <div class="tm_btitlt">
                <i class="nmb"></i><i class="btwenzi">你是男生还是女生</i>
              </div>
            </li>
            <li>
              <label>
                <input name="a" type="radio" value="" />
                <span>男</span></label
              >
            </li>
            <li>
              <label>
                <input name="a" type="radio" value="" />
                <span>女</span></label
              >
            </li>
          </ul>
          <div class="dx_box" data-t="0"></div>
        </div>
        <div class="movie_box" name="3">
          <ul class="wjdc_list">
            <li>
              <div class="tm_btitlt">
                <i class="nmb"></i
                ><i class="btwenzi">对目前的工作哪方面不满意？</i
                ><span class="tip_wz">【多选】</span>
              </div>
            </li>
            <li>
              <label>
                <input name="" type="checkbox" value="" />
                <span>非常满意</span></label
              >
            </li>
            <li>
              <label>
                <input name="" type="checkbox" value="" />
                <span>不满意</span></label
              >
            </li>
            <li>
              <label>
                <input name="" type="checkbox" value="" />
                <span> 较为满意</span></label
              >
            </li>
          </ul>
          <div class="dx_box" data-t="1"></div>
        </div>
         <div class="movie_box" name="3">
          <ul class="wjdc_list">
            <li>
              <div class="tm_btitlt">
                <i class="nmb"></i
                ><i class="btwenzi">你认为的中阳剪纸是怎么样的</i
                ><span class="tip_wz">【多选】</span>
              </div>
            </li>
            <li>
              <label>
                <input name="" type="checkbox" value="" />
                <span>非常好</span></label
              >
            </li>
            <li>
              <label>
                <input name="" type="checkbox" value="" />
                <span>不好</span></label
              >
            </li>
            <li>
              <label>
                <input name="" type="checkbox" value="" />
                <span> 令人学习</span></label
              >
            </li>
          </ul>
          <div class="dx_box" data-t="1"></div>
        </div>
        <div class="movie_box" name="4">
          <ul class="wjdc_list">
            <li>
              <div class="tm_btitlt">
                <i class="nmb"></i>
                <i class="btwenzi">非常好，很好，满意，不满意</i
                ><span class="tip_wz">【填空】</span>
              </div>
            </li>
            <li>
              <label>
                <textarea
                  name=""
                  cols=""
                  rows=""
                  class="input_wenbk btwen_text btwen_text_tk"
                  onblur="if(!this.value)this.value='填空题目'"
                  onclick="if(this.value&&this.value=='填空题目' )  this.value=''"
                ></textarea>
              </label>
            </li>
          </ul>
          <div class="dx_box" data-t="2"></div>
        </div>
        <div class="movie_box" name="4">
          <ul class="wjdc_list">
            <li>
              <div class="tm_btitlt">
                <i class="nmb"></i>
                <i class="btwenzi">对于本网站您还有什么意见</i
                ><span class="tip_wz">【填空】</span>
              </div>
            </li>
            <li>
              <label>
                <textarea
                  name=""
                  cols=""
                  rows=""
                  class="input_wenbk btwen_text btwen_text_tk"
                  onblur="if(!this.value)this.value='填空题目'"
                  onclick="if(this.value&&this.value=='填空题目' )  this.value=''"
                ></textarea>
              </label>
            </li>
          </ul>
          <div class="dx_box" data-t="2"></div>
        </div>
      </div>

      <!--选项卡区域-->

      <div class="xxk_box">
        <ul class="xxk_title">
          <li class="on">单选</li>
          <li>多选</li>
          <li>填空</li>
          <!-- <li></li> -->
        </ul>
        <div class="xxk_conn">
          <!--单选-->
          <div class="xxk_xzqh_box dxuan " data-t="0">
            <textarea
              name=""
              cols=""
              rows=""
              class="input_wenbk btwen_text btwen_text_dx"
              onblur="if(!this.value)this.value='单选题目'"
              onclick="if(this.value&&this.value=='单选题目' )  this.value=''"
            ></textarea>
            <div class="title_itram">
              <div class="kzjxx_iteam">
                <input name="" type="radio" value="" class="dxk" />
                <input
                  name=""
                  type="text"
                  class="input_wenbk"
                  value="选项"
                  onblur="if(!this.value)this.value='选项'"
                  onclick="if(this.value&&this.value=='选项' )  this.value=''"
                />

                <a href="javascript:void(0);" class="del_xm">删除</a>
              </div>
              <div class="kzjxx_iteam">
                <input name="" type="radio" value="" class="dxk" />
                <input
                  name=""
                  type="text"
                  class="input_wenbk"
                  value="选项"
                  onblur="if(!this.value)this.value='选项'"
                  onclick="if(this.value&&this.value=='选项' )  this.value=''"
                />

                <a href="javascript:void(0);" class="del_xm">删除</a>
              </div>
            </div>
            <a href="javascript:void(0)" class="zjxx">增加选项</a>

            <!--完成编辑-->
            <div class="bjqxwc_box">
              <a href="javascript:void(0);" class="qxbj_but">取消编辑</a>
              <a href="javascript:void(0);" class="swcbj_but_new"> 完成编辑</a>
            </div>
          </div>
          <!-- 多选 -->
          <div class="xxk_xzqh_box duoxuan hide" data-t="1">
            <textarea
              name=""
              cols=""
              rows=""
              class="input_wenbk btwen_text btwen_text_duox"
              onblur="if(!this.value)this.value='多选题目'"
              onclick="if(this.value&&this.value=='多选题目' )  this.value=''"
            ></textarea>
            <div class="title_itram">
              <div class="kzjxx_iteam">
                <input name="" type="radio" value="" class="dxk" />
                <input
                  name=""
                  type="text"
                  class="input_wenbk"
                  value="选项"
                  onblur="if(!this.value)this.value='选项'"
                  onclick="if(this.value&&this.value=='选项' )  this.value=''"
                />
                <a href="javascript:void(0);" class="del_xm">删除</a>
              </div>
              <div class="kzjxx_iteam">
                <input name="" type="radio" value="" class="dxk" />
                <input
                  name=""
                  type="text"
                  class="input_wenbk"
                  value="选项"
                  onblur="if(!this.value)this.value='选项'"
                  onclick="if(this.value&&this.value=='选项' )  this.value=''"
                />
                <a href="javascript:void(0);" class="del_xm">删除</a>
              </div>
            </div>
            <a href="javascript:void(0)" class="zjxx">增加选项</a>

            <!-- 完成编辑 -->
            <div class="bjqxwc_box">
              <a href="javascript:void(0);" class="qxbj_but">取消编辑</a>
              <a href="javascript:void(0);" class="swcbj_but_new"> 完成编辑</a>
            </div>
          </div>
          <!-- 填空 -->
          <div class="xxk_xzqh_box tktm hide" data-t="2">
            <textarea
              name=""
              cols=""
              rows=""
              class="input_wenbk btwen_text btwen_text_tk"
              onblur="if(!this.value)this.value='填空题目'"
              onclick="if(this.value&&this.value=='填空题目' )  this.value=''"
            ></textarea>

            <!-- 完成编辑 -->
            <div class="bjqxwc_box">
              <a href="javascript:void(0);" class="qxbj_but">取消编辑</a>
              <a href="javascript:void(0);" class="swcbj_but_new"> 完成编辑</a>
            </div>
          </div>
        </div>
        <!--单选修改-->
        <div class="xxk_xzqh_box dxuan_modify hide" data-t="0">
          <textarea
            name=""
            cols=""
            rows=""
            class="input_wenbk btwen_text btwen_text_dx"
            onblur="if(!this.value)this.value='单选题目'"
            onclick="if(this.value&&this.value=='单选题目' )  this.value=''"
          ></textarea>
          <div class="title_itram">
            <div class="kzjxx_iteam">
              <input name="" type="radio" value="" class="dxk" />
              <input
                name=""
                type="text"
                class="input_wenbk"
                value="选项"
                onblur="if(!this.value)this.value='选项'"
                onclick="if(this.value&&this.value=='选项' )  this.value=''"
              />

              <a href="javascript:void(0);" class="del_xm">删除</a>
            </div>
            <div class="kzjxx_iteam">
              <input name="" type="radio" value="" class="dxk" />
              <input
                name=""
                type="text"
                class="input_wenbk"
                value="选项"
                onblur="if(!this.value)this.value='选项'"
                onclick="if(this.value&&this.value=='选项' )  this.value=''"
              />

              <a href="javascript:void(0);" class="del_xm">删除</a>
            </div>
          </div>
          <a href="javascript:void(0)" class="zjxx">增加选项</a>

          <!--完成编辑-->
          <div class="bjqxwc_box">
            <a href="javascript:void(0);" class="qxbj_but">取消修改</a>
            <a href="javascript:void(0);" class="swcbj_but"> 完成修改</a>
          </div>
        </div>

        <!-- 多选 修改-->
        <div class="xxk_xzqh_box duoxuan_modify hide" data-t="1">
          <textarea
            name=""
            cols=""
            rows=""
            class="input_wenbk btwen_text btwen_text_duox"
            onblur="if(!this.value)this.value='多选题目'"
            onclick="if(this.value&&this.value=='多选题目' )  this.value=''"
          ></textarea>
          <div class="title_itram">
            <div class="kzjxx_iteam">
              <input name="" type="radio" value="" class="dxk" />
              <input
                name=""
                type="text"
                class="input_wenbk"
                value="选项"
                onblur="if(!this.value)this.value='选项'"
                onclick="if(this.value&&this.value=='选项' )  this.value=''"
              />
              <a href="javascript:void(0);" class="del_xm">删除</a>
            </div>
            <div class="kzjxx_iteam">
              <input name="" type="radio" value="" class="dxk" />
              <input
                name=""
                type="text"
                class="input_wenbk"
                value="选项"
                onblur="if(!this.value)this.value='选项'"
                onclick="if(this.value&&this.value=='选项' )  this.value=''"
              />
              <a href="javascript:void(0);" class="del_xm">删除</a>
            </div>
          </div>
          <a href="javascript:void(0)" class="zjxx">增加选项</a>

          <!-- 完成编辑 -->
          <div class="bjqxwc_box">
            <a href="javascript:void(0);" class="qxbj_but">取消修改</a>
            <a href="javascript:void(0);" class="swcbj_but"> 完成修改</a>
          </div>
        </div>
        <!-- 填空修改 -->
        <div class="xxk_xzqh_box tktm_modify hide" data-t="2">
          <textarea
            name=""
            cols=""
            rows=""
            class="input_wenbk btwen_text btwen_text_tk"
            onblur="if(!this.value)this.value='填空题目'"
            onclick="if(this.value&&this.value=='填空题目' )  this.value=''"
          ></textarea>

          <!-- 完成编辑 -->
          <div class="bjqxwc_box">
            <a href="javascript:void(0);" class="qxbj_but">取消修改</a>
            <a href="javascript:void(0);" class="swcbj_but"> 完成修改</a>
          </div>
        </div>
      </div>
      <div class="button">提交问卷</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import "../assets/css/wenjuan_ht.css";
.wrapper {
  margin: 0 auto;
  width: 50%;
  border-left: 1px black solid;
  border-right: 1px black solid;
  margin-top: 20px;
}
</style>