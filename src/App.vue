<template>
  <div class="bigWrap">
    <mt-header fixed :title="title"></mt-header>

    <router-view></router-view>

    <!-- 每个item的id和router.js中跳转路由的path名字要一样 -->
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="home" class="home"></mt-tab-item>
      <mt-tab-item id="project" class="project"></mt-tab-item>
      <mt-tab-item id="plat" class="plat"></mt-tab-item>
      <mt-tab-item id="personal" class="personal"></mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    selected: "home"
  }),
  computed: {
    title() {
      return this.$store.state.title;
    }
  },
  watch: {
    selected() {
      const url = this.selected === "home" ? "/" : `/${this.selected}`;
      this.$router.history.push(url);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.bigWrap {
  height: 100vh;
}
/* 顶部首页状态栏 */
.mint-header {
  background-color: #fff;
  color: #000;
  font-size: 18px;
  height: 60px;
  line-height: 60px;
}
.mint-header-title {
  text-align: left;
  position: absolute;
  left: 26px;
  top: 2px;
}
/* 底部tabbar栏 */
.mint-tabbar {
  background-color: rgb(242, 242, 242);
  height: 58px;
}
.mint-tabbar img {
  width: 20px;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: rgb(242, 242, 242);
}
.mint-tab-item.home {
  background-image: url("./assets/btm1_07.png");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center center;
}
.mint-tab-item.project {
  background-image: url("./assets/btm2_07.png");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center center;
}
.mint-tab-item.plat {
  background-image: url("./assets/btm3_07.png");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center center;
}
.mint-tab-item.personal {
  background-image: url("./assets/btm4_07.png");
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
