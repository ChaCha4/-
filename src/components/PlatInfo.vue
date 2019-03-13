<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/plat" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-search v-model="value" cancel-text placeholder="请输入关键字搜索"></mt-search>
    <ul v-if="infoLists" class="platInfo">
      <li v-for="info in infoLists" :key="info.id">
        <router-link :to="`/plat/platInfo/infoDetails/${info.id}`">
          <span class="imgLeft">
            <img :src="info.infoImg">
          </span>
          <span class="containRight">
            <span class="row1">{{info.infoName}}</span>
            <span class="row2">{{info.infoContain}}</span>
            <span class="row3">
              <span class="date">{{info.infoDate}}</span>
              <span class="hotNum">{{info.infoWatch}}</span>
            </span>
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "platInfo",
  created() {
    this.$store.dispatch("headerTitle", "投融资讯");
    this.$store.dispatch("getInfoLists");
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    infoLists() {
      return this.$store.state.infoLists;
    }
  },
  data: () => ({
    value: ""
  })
};
</script>
<style>
/* header栏样式 */
.mintui {
  font-size: 20px;
}
.mint-header-title {
  left: 34px;
}
/* 资讯列表 */
.platInfo li {
  display: flex;
  align-items: center;
  justify-content: center;
}
.platInfo li .imgLeft img {
  width: 100px;
  height: 66px;
}
</style>
