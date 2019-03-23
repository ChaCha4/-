<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/project" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="proDetail-contain">
      <div class="proDetail proDetail1">
        <span class="row1">
          <span>
            <span style="color:blue">【境外投资】</span>
            {{proDetails.proName}}
          </span>
          <img src="../assets/收藏.png">
        </span>
        <span class="row2">
          <span>{{proDetails.proDate}}</span>
          <span>
            <img src="../assets/浏览.png">
            {{proDetails.watchNum}}
          </span>
          <span>
            <img src="../assets/收藏.png">
            {{proDetails.starNum}}
          </span>
          <img src="../assets/转发.png">
        </span>
        <span class="row3">{{proDetails.proContain}}</span>
      </div>
      <div class="proDetail proDetail2">
        <span>意向金额：{{proDetails.proMoney}}</span>
        <span>项目编号：{{proDetails.proId}}</span>
        <span>项目类型：{{proDetails.proType}}</span>
        <span class="childRow1">
          <span>项目分类：{{proDetails.proTab}}</span>
          <span>所属行业：{{proDetails.proField}}</span>
        </span>
        <span class="childRow2">
          <span>所属地区：{{proDetails.proRegion}}</span>
          <span>项目状态：{{proDetails.proState}}</span>
        </span>
        <span>项目有效期：{{proDetails.proIndate}}</span>
      </div>
      <div class="proDetail proDetail3">
        <span class="contactMethod">联系方式</span>
        <div class="card">
          <img src="../assets/headImg01_07.png">
          <span>刘海涛</span>
          <span>
            <span>上海</span>
            <span>合伙人</span>
          </span>
          <span>邮箱：panyujia@kwm.com</span>
          <span>座机：010-88888888</span>
          <span>手机：1888888888</span>
        </div>
      </div>
      <div class="proDetail proDetail4">
        <span>评论</span>
        <div class="comments"></div>
      </div>
    </div>
    <div class="detailBottom">
      <img src="../assets/headImg01_07.png">
      <input type="text">
      <mt-button type="primary">发送</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "proDetail",
  created() {
    this.$store.dispatch("headerTitle", "项目详情");
    this.$store.dispatch("getProDetails", this.$route.params.id);
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    proDetails() {
      return this.$store.state.proDetails;
    }
  }
};
</script>
<style>
.proDetail-contain {
  background-color: rgb(248, 248, 248);
  margin-top: 60px;
  height: 800px;
}
.proDetail-contain .proDetail {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
.proDetail-contain > .proDetail + .proDetail {
  margin-top: 10px;
}
.proDetail-contain .proDetail1 .row1 {
  display: flex;
  justify-content: space-around;
}
.proDetail-contain .proDetail1 .row1 img {
  width: 18px;
  height: 18px;
}
.proDetail-contain .proDetail1 .row2 {
  display: flex;
  justify-content: space-around;
}
.proDetail-contain .proDetail1 .row2 img {
  width: 18px;
  height: 18px;
}
.proDetail-contain .proDetail1 .row3 {
  width: 90%;
  margin: 0 auto;
}
.proDetail-contain .proDetail2 {
  padding: 20px;
  justify-content: space-around;
}
.proDetail-contain .proDetail2 .childRow1,
.proDetail-contain .proDetail2 .childRow2 {
  display: flex;
  justify-content: space-between;
}
.proDetail-contain .proDetail3 .card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.proDetail-contain .proDetail3 img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.proDetail-contain .proDetail3 .contactMethod {
  margin-top: 10px;
  margin-left: 20px;
}
</style>

