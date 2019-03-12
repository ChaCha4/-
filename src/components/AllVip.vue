<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/plat" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-search v-model="value" cancel-text placeholder="请输入关键字搜索"></mt-search>
    <div class="allvip-cell">
      <mt-cell title="VIP规则" to="/plat/allVip/vipRule" is-link></mt-cell>
      <mt-cell title="申请VIP账号" to="/plat/allVip/vipApply" is-link></mt-cell>
    </div>
    <!-- 所有VIP列表，需要用到router-link，跳转到VIP详情页 -->
    <ul class="VIPLists-contain" v-if="VIPLists">
      <li v-for="VIPDetails in VIPLists" :key="VIPDetails.id">
        <router-link :to="`/plat/allVip/vipdetails/${VIPDetails.id}`">
          <span class="row1">{{VIPDetails.allName}}</span>
          <span class="row2">
            <span>
              <img src="../assets/tag-m.svg">
              {{VIPDetails.profession}}
            </span>
            <span>
              <img src="../assets/dingwei.svg">
              {{VIPDetails.region}}
            </span>
            <span>
              <img src="../assets/wode.svg">
              {{VIPDetails.contact}}
            </span>
          </span>
          <span class="row3">{{VIPDetails.filed}}</span>
        </router-link>
      </li>
    </ul>
    <div v-else>正在获取中，请稍等。。。。</div>
  </div>
</template>
<script>
export default {
  name: "allVip",
  created() {
    this.$store.dispatch("headerTitle", "所有VIP");
    this.$store.dispatch("getVIPLists");
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    VIPLists() {
      return this.$store.state.VIPLists;
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
/* VIP列表 */
.VIPLists-contain li {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
}
.VIPLists-contain li .row1 {
  margin-top: 20px;
}
.VIPLists-contain li .row2 {
  display: flex;
  color: rgb(127, 126, 141);
}
.VIPLists-contain li .row3 {
  color: rgb(127, 126, 141);
}
.VIPLists-contain li .row2 img {
  width: 16px;
}
.VIPLists-contain > li + li {
  border-top: 1px solid rgb(127, 126, 141, 0.2);
}
</style>

