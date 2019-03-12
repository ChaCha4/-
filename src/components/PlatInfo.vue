<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/plat" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-search v-model="value" cancel-text placeholder="请输入关键字搜索"></mt-search>
  </div>
</template>
<script>
export default {
  name: "platInfo",
  created() {
    return this.$store.dispatch("headerTitle", "投融资讯");
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  },
  data: () => ({
    value: ""
  })
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
