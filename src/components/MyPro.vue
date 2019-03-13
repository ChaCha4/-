<template>
  <div>
    <mt-header fixed :title="title">
      <router-link to="/personal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>
<script>
export default {
  name: "myPro",
  created() {
    this.$store.dispatch("headerTitle", "我的项目");
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  }
};
</script>

