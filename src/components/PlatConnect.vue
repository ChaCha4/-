<template>
  <div class="connect-contain">
    <mt-header fixed :title="title">
      <router-link to="/plat" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <img class="platConnect-img" src="../assets/plat2_02_02.png">
    <p
      class="connect-p"
    >坚持以金杜客户为中心的服务理念！旨在金杜内部律师之间、金杜与客户之间建立一个信息互通、资源共享的投融资信息互动平台，使金杜不仅仅能够为客户提供专业化的法律服务，还能够充分利用金杜强大的资源优势，为客户的商业需求提供交易机</p>
  </div>
</template>
<script>
export default {
  name: "platConnect",
  created() {
    return this.$store.dispatch("headerTitle", "合作机构");
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
.platConnect-img {
  width: 288px;
  height: 180px;
}
.connect-contain {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 10px;
}
.connect-p {
  margin-top: 20px;
}
</style>
