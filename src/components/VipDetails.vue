<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/plat/allVip" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <ul class="detail-card1">
      <li>VIP全称：{{details.allName}}</li>
      <li>VIP简称：{{details.shortName}}</li>
      <li>行业：{{details.profession}}</li>
      <li>地区：{{details.region}}</li>
      <li>投融资领域：{{details.filed}}</li>
    </ul>
    <ul class="detail-card2">
      <li>联系人：{{details.contact}}</li>
      <li>职位：{{details.position}}</li>
      <li>手机：{{details.phone}}</li>
      <li>邮箱：{{details.email}}</li>
      <li>座机：{{details.telephone}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "VipDetails",
  created() {
    this.$store.dispatch("headerTitle", "VIP详情");
    this.$store.dispatch("getVIPDetails", this.$route.params.id);
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    details() {
      return this.$store.state.details;
    }
  }
};
</script>
<style>
</style>

