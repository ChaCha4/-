<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/plat" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="text-container">
      <div class="text-box text-box1">
        <h3>一、如何进行平台的注册及登录</h3>
        <p>金杜员工无需注册，在内网以及企业微信上默认登录，但在微信小程序登录时需输入用户名和密码（待定）</p>
      </div>
      <div class="text-box text-box2">
        <h3>二、如何获得平台的VIP账户</h3>
        <p>平台的“VIP用户系统”有待事务所管理层批准后方可推出。</p>
        <p>平台将对VIP账户的授予设定规则，VIP账户需要合伙人向平台提出申请，在获得平台批准后收于特定客户VIP账号和密码，VIP用户可以凭借该用户名和密码登陆微信小程序，但无法登陆金杜的内网以及</p>
      </div>
      <div class="text-box text-box3">
        <h3>三、如何在平台上发布项目</h3>
        <p>1.首先，登入平台</p>
        <p>2.其次，登入后，在主页面点击“发布项目”按钮进行操作（如图）；</p>
        <p>3.根据界面提示进行信息填写。其中，标有红色“*”号的栏目属于必填（如图）</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "platHelp",
  created() {
    return this.$store.dispatch("headerTitle", "使用帮助");
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
p {
  color: rgb(127, 126, 141);
}
h3 {
  color: rgb(69, 69, 87);
  font-size: 16px;
  margin: 20px 0 10px;
}
/* 文字盒子样式 */
.text-container {
  margin: 60px 20px;
}
.text-box {
  border-bottom: 1px solid #ccc;
}
.text-box3 {
  border-bottom: none;
}
</style>
