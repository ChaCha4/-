<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/plat/allVip" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="rule-contain">
      <h4>VIP账号规则</h4>
      <img src="../assets/plat2_02_02.png">
      <p>金杜投融资平台是，若是切尔西在未来也参加总统选举的话，这个”三口之家“大概也算是前无古人了。金杜投融资平台是，若是切尔西在未来也参加总统选举的话，这个”三口之家“大概也算是前无古人了。金杜投融资平台是，若是切尔西在未来也参加总统选举的话，这个”三口之家“大概也算是前无古人了。金杜投融资平台是，若是切尔西在未来也参加总统选举的话，这个”三口之家“大概也算是前无古人了。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "vipRule",
  created() {
    this.$store.dispatch("headerTitle", "VIP账号规则");
  },
  computed: {
    title() {
      return this.$store.state.title;
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
.rule-contain {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  margin: 60px auto;
  margin-bottom: 20px;
}
.rule-contain h4 {
  margin-bottom: 16px;
}
.rule-contain img {
  width: 376px;
  height: 240px;
}
.rule-contain p {
  margin-top: 20px;
  text-indent: 2em;
  font-size: 14px;
  line-height: 24px;
  width: 90%;
}
</style>


