<template>
  <div class="wrapper">
    <div  class="m-container-small m-padded-tb-big">
    <div class="ui container">
      <div  class="ui secondary segment form">
        <input type="hidden" name="page" >
        <div class="inline fields">
          <div class="field">
            <input type="text" name="title" placeholder="标题">
          </div>
          <div class="field">
            <div class="ui labeled action input">
              <div class="ui type selection dropdown">
                <input type="hidden" name="typeId">
                <i class="dropdown icon"></i>
                <div class="default text">分类</div>
                <div class="menu">
                  <div th:each="type : ${types}" class="item" data-value="1" th:data-value="${type.id}" th:text="${type.name}">错误日志</div>
                  <!--/*-->
                  <div class="item" data-value="2">开发者手册</div>
                  <!--*/-->
                </div>
              </div>
              <button id="clear-btn" class="ui compact button">clear</button>
            </div>

          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" id="recommend" name="recommend">
              <label for="recommend">推荐</label>
            </div>
          </div>
          <div class="field">
            <button  type="button" id="search-btn" class="ui mini teal basic button"><i class="search icon"></i>搜索</button>
          </div>
        </div>
      </div>
      <div id="table-container">
        <table th:fragment="blogList" class="ui compact teal table">
          <thead>
          <tr>
            <th></th>
            <th>标题</th>
            <th>类型</th>
            <th>推荐</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr th:each="blog,iterStat : ${page.content}">
            <td th:text="${iterStat.count}">1</td>
            <td th:text="${blog.title}">中阳剪纸问卷调查</td>
            <td th:text="${blog.type.name}">神话传说</td>
            <td th:text="${blog.recommend} ? '是':'否'">是</td>
             
            <td th:text="${blog.updateTime}">2021-03-02 09:45</td>
            <td>
              <a href="#" th:href="@{/admin/blogs/{id}/input(id=${blog.id})}" class="ui mini teal basic button" @click="button">参与</a>
              <!-- <a href="#" th:href="@{/admin/blogs/{id}/delete(id=${blog.id})}" class="ui mini red basic button">删除</a> -->
            </td>
          </tr>
          <tr th:each="blog,iterStat : ${page.content}">
            <td th:text="${iterStat.count}">2</td>
            <td th:text="${blog.title}">中阳剪纸问卷调查</td>
            <td th:text="${blog.type.name}">认知升级</td>
            <td th:text="${blog.recommend} ? '是':'否'">是</td>
             
            <td th:text="${blog.updateTime}">2021-03-02 09:45</td>
            <td>
              <a href="#" th:href="@{/admin/blogs/{id}/input(id=${blog.id})}" class="ui mini teal basic button" @click="button">参与</a>
              <!-- <a href="#" th:href="@{/admin/blogs/{id}/delete(id=${blog.id})}" class="ui mini red basic button">删除</a> -->
            </td>
          </tr>
          <tr th:each="blog,iterStat : ${page.content}">
            <td th:text="${iterStat.count}">3</td>
            <td th:text="${blog.title}">中阳剪纸问卷调查</td>
            <td th:text="${blog.type.name}">认知升级</td>
            <td th:text="${blog.recommend} ? '是':'否'">是</td>
             
            <td th:text="${blog.updateTime}">2021-03-02 09:45</td>
            <td>
              <a href="#" th:href="@{/admin/blogs/{id}/input(id=${blog.id})}" class="ui mini teal basic button" @click="button">参与</a>
              <!-- <a href="#" th:href="@{/admin/blogs/{id}/delete(id=${blog.id})}" class="ui mini red basic button">删除</a> -->
            </td>
          </tr>
          <tr th:each="blog,iterStat : ${page.content}">
            <td th:text="${iterStat.count}">4</td>
            <td th:text="${blog.title}">中阳剪纸问卷调查</td>
            <td th:text="${blog.type.name}">认知升级</td>
            <td th:text="${blog.recommend} ? '是':'否'">是</td>
             
            <td th:text="${blog.updateTime}">2021-03-02 09:45</td>
            <td>
              <a href="#" th:href="@{/admin/blogs/{id}/input(id=${blog.id})}" class="ui mini teal basic button" @click="button">参与</a>
              <!-- <a href="#" th:href="@{/admin/blogs/{id}/delete(id=${blog.id})}" class="ui mini red basic button">删除</a> -->
            </td>
          </tr>
          <tr th:each="blog,iterStat : ${page.content}">
            <td th:text="${iterStat.count}">5</td>
            <td th:text="${blog.title}">中阳剪纸问卷调查</td>
            <td th:text="${blog.type.name}">认知升级</td>
            <td th:text="${blog.recommend} ? '是':'否'">是</td>
             
            <td th:text="${blog.updateTime}">2021-03-02 09:45</td>
            <td>
              <a href="#" th:href="@{/admin/blogs/{id}/input(id=${blog.id})}" class="ui mini teal basic button" @click="button">参与</a>
              <!-- <a href="#" th:href="@{/admin/blogs/{id}/delete(id=${blog.id})}" class="ui mini red basic button">删除</a> -->
            </td>
          </tr>
          <tr th:each="blog,iterStat : ${page.content}">
            <td th:text="${iterStat.count}">6</td>
            <td th:text="${blog.title}">中阳剪纸问卷调查</td>
            <td th:text="${blog.type.name}">认知升级</td>
            <td th:text="${blog.recommend} ? '是':'否'">是</td>
             
            <td th:text="${blog.updateTime}">2021-03-02 09:45</td>
            <td>
              <a href="#" th:href="@{/admin/blogs/{id}/input(id=${blog.id})}" class="ui mini teal basic button" @click="button">参与</a>
              <!-- <a href="#" th:href="@{/admin/blogs/{id}/delete(id=${blog.id})}" class="ui mini red basic button">删除</a> -->
            </td>
          </tr>
          </tbody> 
          <tfoot>
          <tr>
            <th colspan="7">
              <div class="ui mini pagination menu" th:if="${page.totalPages}>1" >
                <a onclick="page(this)" th:attr="data-page=${page.number}-1" class="item" th:unless="${page.first}">上一页</a>
                <a onclick="page(this)" th:attr="data-page=${page.number}+1" class=" item" th:unless="${page.last}">下一页</a>
              </div>
              <a href="#" th:href="@{/admin/blogs/  }" class="ui mini right floated teal basic button">新增</a>
            </th>
          </tr>
          </tfoot>
        </table>

        <!-- <div class="ui success message" th:unless="${#strings.isEmpty(message)}">
          <i class="close icon"></i>
          <div class="header">提示：</div>
          <p th:text="${message}">恭喜，操作成功！</p>
        </div> -->

      </div>

    </div>
  </div>
  </div>
</template>
<script>
export default {
  methods:{
    button(){
       this.$router.push({
        //核心语句
        path:`/questionlist`
      });
    }
  }
}
</script>
<style scoped>
@import "https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css";
@import "../assets/css/animate.css";
@import "../assets/css/prism.css";
@import "../assets/css/typo.css";
@import "../assets/css/me.css";
@import "../assets/css/tocbot.css";

.wrapper{
  /* margin-top: 40px; */
}

</style>