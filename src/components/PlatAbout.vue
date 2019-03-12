<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/plat" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="about-contain">
      <h4>平台定位</h4>
      <img src="../assets/plat2_02_02.png">
      <p>坚持以金杜客户为中心的服务理念！旨在金杜内部律师之间、金杜与客户之间建立一个信息互通、资源共享的投融资信息互动平台，使金杜不仅仅能够为客户提供专业化的法律服务，还能够充分利用金杜强大的资源优势，为客户的商业需求提供交易机</p>
      <h4>访问端口</h4>
    </div>
    <ul class="about-list">
      <li>金杜内网：限金杜员工</li>
      <li>企业微信：限金杜员工</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "platAbout",
  created() {
    return this.$store.dispatch("headerTitle", "关于平台");
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
.about-contain {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 10px;
  margin-bottom: 20px;
  overflow: scroll;
}
.about-contain p {
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 24px;
}
.about-contain img {
  width: 288px;
  height: 180px;
}
.about-list {
  margin-left: 30px;
  color: rgb(127, 126, 141);
  font-size: 16px;
}
</style>
