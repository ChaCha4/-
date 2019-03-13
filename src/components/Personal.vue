<template>
  <div>
    <mt-header fixed :title="title"></mt-header>
    <div class="contain-top">
      <div class="idCard">
        <span class="cart-left">
          <span class="row1">刘海涛</span>
          <span class="row2">
            <span>金杜律师事务所</span>
            <span>合伙人</span>
          </span>
        </span>
      </div>
      <div class="headImg">
        <img src="../assets/headImg_03.png">
      </div>
    </div>
    <div class="contain-btm">
      <mt-cell title="发布项目" to="/personal/pubPro" is-link>
        <img slot="icon" src="../assets/my1.png" width="26" height="26">
      </mt-cell>
      <mt-cell title="我的项目" to="/personal/myPro" is-link>
        <img slot="icon" src="../assets/my2.png" width="26" height="26">
      </mt-cell>
      <mt-cell title="我的收藏" to="/personal/myStar" is-link>
        <img slot="icon" src="../assets/my3.png" width="26" height="26">
      </mt-cell>
      <mt-cell title="我的分享" to="/personal/myShare" is-link>
        <img slot="icon" src="../assets/my4.png" width="26" height="26">
      </mt-cell>
      <mt-cell title="我的VIP" to="/personal/MyVIP" is-link>
        <img slot="icon" src="../assets/my5.png" width="26" height="26">
      </mt-cell>
      <mt-cell title="我的联系合伙人" to="/personal/myContact" is-link>
        <img slot="icon" src="../assets/my6.png" width="26" height="26">
      </mt-cell>
      <mt-cell title="申请VIP账号" to="/personal/applyVip" is-link>
        <img slot="icon" src="../assets/my7.png" width="26" height="26">
      </mt-cell>
      <mt-cell title="账户设置" to="/personal/accountSetting" is-link>
        <img slot="icon" src="../assets/my8.png" width="26" height="26">
      </mt-cell>
    </div>
  </div>
</template>
<script>
export default {
  name: "personal",
  created() {
    return this.$store.dispatch("headerTitle", "我的");
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  }
};
</script>
<style>
.contain-btm {
  margin-top: 10px;
}
.contain-top {
  margin: 0 auto;
  margin-top: 73px;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
}
.contain-top .headImg {
  border-radius: 50%;
}
.contain-top .headImg img {
  width: 50px;
  height: 50px;
}
.contain-top .cart-left {
  display: flex;
  flex-direction: column;
}
.contain-top .cart-left .row1 {
  font-size: 22px;
  margin-bottom: 10px;
}
.contain-top .cart-left .row2 {
  display: flex;
  width: 180px;
  justify-content: space-between;
}
</style>

    