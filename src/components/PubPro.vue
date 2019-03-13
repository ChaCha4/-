<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/personal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="pubPro-contain">
      <span>标题 *</span>
      <mt-field placeholder="请输入标题" v-model="input"></mt-field>
      <span>简介 *</span>
      <mt-field placeholder="请输入简介" v-model="input"></mt-field>
      <span>意向金额（可不填）</span>
      <mt-field placeholder="请输入意向金额" v-model="input"></mt-field>
    </div>
  </div>
</template>
<script>
export default {
  name: "pubPro",
  data: () => ({
    input: ""
  }),
  created() {
    this.$store.dispatch("headerTitle", "发布项目");
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  }
};
</script>
<style>
.pubPro-contain {
  margin-top: 60px;
}
</style>

