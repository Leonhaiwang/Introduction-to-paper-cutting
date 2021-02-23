<template>
  <div class="about">
    <div class="innerHtml">
      <span class="p">总数组:</span>
      {{ objArr }}
    </div>
    <div class="innerHtml">
      <span class="p">当前值:</span>
      {{ currentVal }}
    </div>
    <div class="innerHtml">
      <span class="p">当前索引:</span>
      {{ currentIndex }}
    </div>
    <el-button type="success" plain round @click="back"> 《 </el-button>
    <el-button type="danger" plain round @click="go">》</el-button>
    <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
    <el-button plain round @click="add">新增</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      currentVal: "",
      currentIndex: 0,
      objArr: [{ name: "小李" }, { name: "小王" }, { name: "小陈" }]
    };
  },
  created() {
    this.onload();
  },
  methods: {
    onload() {
      this.currentVal = this.objArr[this.objArr.length - 1];
      this.currentIndex = this.objArr.length;
    },
    go() {
      if (this.currentIndex === this.objArr.length) {
        this.$message({
          showClose: true,
          message: "后面到头了",
          type: "warning"
        });
      } else {
        this.currentIndex++;
        this.currentVal = this.objArr[this.currentIndex - 1];
      }
    },
    back() {
      if (this.currentIndex === 1) {
        this.$message({
          showClose: true,
          message: "前面没有了",
          type: "warning"
        });
      } else {
        this.currentIndex--;
        this.currentVal = this.objArr[this.currentIndex - 1];
      }
    },
    add() {
      if (this.input.trim() === "") {
        this.$message({
          showClose: true,
          message: "请填写后再提交",
          type: "warning"
        });
      } else {
        //数组添加
        this.objArr.splice(
          this.currentIndex,
          this.objArr.length - this.currentIndex,
          this.input
        );
        // this.objArr[this.currentIndex] = this.input
        this.currentIndex++;
        this.currentVal = this.objArr[this.currentIndex - 1];
      }
    }
  }
};
</script>
<style scoped>
.innerHtml{
  font-size: 22px;
  margin-bottom: 30px;
}
.p {
  color: red;
}
.input {
  width: 200px;
}
</style>
