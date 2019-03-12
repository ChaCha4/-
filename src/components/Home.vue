<template>
  <div>
    <mt-search v-model="value" cancel-text placeholder="请输入关键字搜索"></mt-search>
    <mt-swipe>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
    <!-- 四个蓝色按钮，用flex布局 需要用一个大盒子包起来 flex布局查找阮一峰文档-->
    <div class="btn-group">
      <span>项目收购</span>
      <span>项目转让</span>
      <span>项目合作</span>
      <span>项目融资</span>
    </div>

    <!-- 许多个小icon图标组 也是用flex布局 inner-box部分也做成flex布局-->
    <div class="icon-group">
      <div class="inner-box">
        <span class="box1"></span>
        <span>不良资产</span>
      </div>
      <div class="inner-box">
        <span class="box2"></span>
        <span>房地产交易</span>
      </div>
      <div class="inner-box">
        <span class="box3"></span>
        <span>破产重组</span>
      </div>
      <div class="inner-box">
        <span class="box4"></span>
        <span>股权投资</span>
      </div>
      <div class="inner-box">
        <span class="box5"></span>
        <span>境外投资</span>
      </div>
      <div class="inner-box">
        <span class="box6"></span>
        <span>外商投资</span>
      </div>
      <div class="inner-box">
        <span class="box7"></span>
        <span>政府招商</span>
      </div>
      <div class="inner-box">
        <span class="box8"></span>
        <span>信托资管</span>
      </div>
      <div class="inner-box">
        <span class="box9"></span>
        <span>知识产权</span>
      </div>
      <div class="inner-box">
        <span class="box10"></span>
        <span>壳资源</span>
      </div>
    </div>
    <!-- <mt-navbar v-model="selected">
      <mt-tab-item id="new">最新项目</mt-tab-item>
      <mt-tab-item id="recommand">推荐项目</mt-tab-item>
      <mt-tab-item id="hot">最热项目</mt-tab-item>
    </mt-navbar>-->
    <!-- tab-container -->
    <!-- <mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'content ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'content ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'content ' + n" />
  </mt-tab-container-item>
    </mt-tab-container>-->
    <!-- 发布按钮-小飞机图标 -->
    <span></span>
  </div>
</template>
<script>
export default {
  name: "home",
  created() {
    this.$store.dispatch("headerTitle", "首页");
  },
  data: () => ({
    value: ""
  })
};
</script>
<style>
/* 搜索栏 */
.mint-search {
  height: 50px;
  margin-top: 60px;
}
.mint-searchbar-inner {
  padding-left: 98px;
}
/* 搜索图标 */
.mint-searchbar-inner .mintui-search {
  font-size: 24px;
}
/* input框 */
.mint-searchbar-core {
  padding-left: 8px;
}
/* 轮播图部分 */
.mint-swipe-items-wrap {
  height: 240px;
  background-image: url("../assets/home-1_02.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
/* 按钮组部分 */
.btn-group {
  display: flex;
  margin-top: 10px;
}
.btn-group span {
  background-color: rgb(0, 123, 255);
  flex-grow: 1;
  outline: none;
  text-align: center;
  width: 90px;
  line-height: 34px;
  color: #fff;
}

.btn-group span:nth-child(2),
.btn-group span:nth-child(3),
.btn-group span:nth-child(4) {
  margin-left: 2px;
}
/* icon图标组部分 */
.icon-group {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 98%;
}
/* inner-box部分 */
.inner-box {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* 主轴是垂直方向时，要想上下两个项目的中心线对齐，需要用交叉轴对齐方式 */
  align-items: center;
}
.inner-box span:nth-child(2) {
  color: rgb(160, 158, 171);
}
.inner-box span:nth-child(1) {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: contain;
  margin-bottom: 6px;
}
.inner-box .box1 {
  background-image: url("../assets/home-pic1_03.png");
}
.inner-box .box2 {
  background-image: url("../assets/home-pic2_03.png");
}
.inner-box .box3 {
  background-image: url("../assets/home-pic3_03.png");
}
.inner-box .box4 {
  background-image: url("../assets/home-pic4_03.png");
}
.inner-box .box5 {
  background-image: url("../assets/home-pic5_03.png");
}
.inner-box .box6 {
  background-image: url("../assets/home-pic6_03.png");
}
.inner-box .box7 {
  background-image: url("../assets/home-pic7_03.png");
}
.inner-box .box8 {
  background-image: url("../assets/home-pic8_03.png");
}
.inner-box .box9 {
  background-image: url("../assets/home-pic9_03.png");
}
.inner-box .box10 {
  background-image: url("../assets/home-pic10_03.png");
}
</style>


