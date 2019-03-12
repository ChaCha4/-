<template>
  <div>
    <mt-search v-model="value" cancel-text placeholder="请输入关键字搜索"></mt-search>
  </div>
</template>
<script>
export default {
  name: "project",
  created() {
    return this.$store.dispatch("headerTitle", "项目");
  },
  data: () => ({
    value: ""
  })
};
</script>
