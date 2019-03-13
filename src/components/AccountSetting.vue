<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/personal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="setting-contain">
      <mt-cell title="头像">
        <img class="head-img" src="../assets/headImg_03.png" width="40" height="40">
      </mt-cell>
      <mt-cell title="用户名" value="zhangsan" style="padding-right:20px"></mt-cell>
      <mt-cell title="姓名" value="张三" style="padding-right:20px" is-link></mt-cell>
      <mt-cell title="公司名称" value="金杜律师事务所" style="padding-right:20px" is-link></mt-cell>
      <mt-cell title="公司简称" value="金杜" style="padding-right:20px" is-link></mt-cell>
      <mt-cell title="职位" value="律师" style="padding-right:20px" is-link></mt-cell>
      <mt-cell title="手机号" value="18888888888" style="padding-right:20px" is-link></mt-cell>
      <mt-cell title="邮箱" value="zhangsan@cn.kwm.com" style="padding-right:20px" is-link></mt-cell>
      <mt-cell title="座机" value="010-587855888" style="padding-right:20px" is-link></mt-cell>
      <mt-cell title="我的投融资客户" is-link></mt-cell>
      <mt-cell title="修改密码" is-link></mt-cell>
    </div>
  </div>
</template>
<script>
export default {
  name: "accountSetting",
  created() {
    this.$store.dispatch("headerTitle", "账户设置");
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  }
};
</script>
<style>
.setting-contain {
  margin-top: 60px;
  height: 780px;
}
.setting-contain .head-img {
  padding-right: 20px;
}
</style>


