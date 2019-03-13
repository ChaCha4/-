<template>
  <div>1</div>
</template>
<script>
export default {
  name: "messageBox",
  created() {
    MessageBox.prompt("请输入姓名").then(({ value, action }) => {});
  }
};
</script>
