<template>
  <div class="infoDetailWrap">
    <mt-header fixed :title="title">
      <router-link to="/plat/platInfo" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="infoContain">
      <h4>{{infoDetail.infoName}}</h4>
      <img :src="infoDetail.infoImg">
      <p>{{infoDetail.infoAllContain}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "infoDetails",
  created() {
    this.$store.dispatch("headerTitle", "资讯详情");
    this.$store.dispatch("getInfoDetails", this.$route.params.id);
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    infoDetail() {
      return this.$store.state.infoDetails;
    }
  }
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
</style>
