<template>
  <div class="cell">
    <div>
      <mt-cell title="所有VIP" to="/plat/allVip" is-link>
        <img slot="icon" src="../assets/plat1.png" width="26" height="26">
      </mt-cell>
      <mt-cell title="投融资讯" to="/plat/platInfo" is-link>
        <img slot="icon" src="../assets/plat2.png" width="26" height="26">
      </mt-cell>
      <mt-cell title="关于平台" to="/plat/platAbout" is-link>
        <img slot="icon" src="../assets/plat3.png" width="26" height="26">
      </mt-cell>
      <mt-cell title="合作机构" to="/plat/platConnect" is-link>
        <img slot="icon" src="../assets/plat4.png" width="26" height="26">
      </mt-cell>
      <mt-cell title="使用帮助" to="/plat/platHelp" is-link>
        <img slot="icon" src="../assets/plat5.png" width="26" height="26">
      </mt-cell>
    </div>
  </div>
</template>
<script>
export default {
  name: "plat",
  data: () => ({
    selected: "plat"
  }),
  created() {
    return this.$store.dispatch("headerTitle", "平台");
  }
};
</script>
<style>
a {
  text-decoration: none;
  color: #000;
}
/* cell组部分 */
.cell {
  padding-top: 66px;
  background-color: rgb(248, 248, 248);
}
.mint-cell-wrapper {
  height: 60px;
  margin: 0 16px;
}
.mint-cell-text {
  margin-left: 12px;
}
</style>

