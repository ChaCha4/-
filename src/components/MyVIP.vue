<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/personal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="myVip-contain">
      <div class="contain contain1">
        <span>VIP全称：北京xx科技有限公司</span>
        <span>VIP简称：xx科技</span>
        <span>行业：法律</span>
        <span>地区：北京</span>
        <span>投融资领域：房地产交易、不良资产</span>
      </div>
      <div class="contain contain2">
        <span>联系人：张三</span>
        <span>职位：律师</span>
        <span>手机：18888888888</span>
        <span>邮箱：panyujia@kwm.com</span>
        <span>座机：010-88888888</span>
      </div>
      <div class="contain contain3">
        <span>VIP账号：北京xx科技有限公司</span>
        <span>VIP有效期：截止到2019-1225</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myVIP",
  created() {
    this.$store.dispatch("headerTitle", "我的VIP");
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  }
};
</script>
<style>
.myVip-contain {
  background-color: rgb(248, 248, 248);
  margin-top: 60px;
  height: 620px;
}
.myVip-contain .contain {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: space-around;
}
.myVip-contain .contain1 {
  height: 170px;
}
.myVip-contain .contain2,
.myVip-contain .contain3 {
  margin-top: 10px;
  height: 80px;
}
.myVip-contain .contain2 {
  height: 180px;
}
</style>

