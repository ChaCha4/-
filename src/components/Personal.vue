<template>
  <div>我的</div>
</template>
<script>
export default {
  name: "personal",
  created() {
    return this.$store.dispatch("headerTitle", "我的");
  }
};
</script>
    