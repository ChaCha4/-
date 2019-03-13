<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/personal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="myContact-contain">
      <div class="contain contain1">
        <span>联系合伙人：林嘉</span>
        <span>职位：律师</span>
        <span>手机：18888888888</span>
        <span>邮箱：panyujia@kwm.com</span>
        <span>座机：010-88888888</span>
      </div>
      <div class="contain contain2">
        <span>VIP全称：北京xx科技有限公司</span>
        <span>VIP简称：xx科技</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myContact",
  created() {
    this.$store.dispatch("headerTitle", "我的联系合伙人");
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  }
};
</script>
<style>
.myContact-contain {
  margin-top: 60px;
  background-color: rgb(248, 248, 248);
  height: 780px;
}
.myContact-contain .contain {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.myContact-contain .contain1 {
  height: 176px;
}
.myContact-contain .contain2 {
  margin-top: 10px;
  height: 78px;
}
</style>

