<template>
  <div>
    <mt-search v-model="value" cancel-text placeholder="请输入关键字搜索"></mt-search>

    <div class="topTab">
      <span>
        类型
        <img src="../assets/择律-选择费用-倒三角形-反对.svg">
      </span>
      <span>
        分类
        <img src="../assets/择律-选择费用-倒三角形-反对.svg">
      </span>
      <span>
        行业
        <img src="../assets/择律-选择费用-倒三角形-反对.svg">
      </span>
      <span>
        地区
        <img src="../assets/择律-选择费用-倒三角形-反对.svg">
      </span>
      <span>
        排序
        <img src="../assets/择律-选择费用-倒三角形-反对.svg">
      </span>
    </div>
    <ul class="projects-contain" v-if="proLists">
      <li v-for="item in proLists" :key="item.id">
        <router-link :to="`/project/proDetail/${item.id}`">
          <span class="row1">
            <span v-if="item.isTop" style="flex-shrink:0">置顶</span>
            
            <span style="flex-shrink:1">
              <span>【境外投资】</span>
              {{item.proName}}
            </span>
            <img style="flex-shrink:0" src="../assets/收藏.png">
          </span>
          <span class="row2">{{item.proContain}}</span>
          <span class="row3">
            <span>
              <img src="../assets/联系人.png">
              {{item.proContact}}
            </span>
            <span>
              <img src="../assets/日期.png">
              {{item.proDate}}
            </span>
            <span>
              <img src="../assets/浏览.png">
              {{item.watchNum}}
            </span>
            <span>
              <img src="../assets/收藏.png">
              {{item.starNum}}
            </span>
            <span>{{item.proState}}</span>
          </span>
        </router-link>
      </li>
    </ul>
    <div v-else>正在获取数据，请稍后...</div>
  </div>
</template>
<script>
export default {
  name: "project",
  created() {
    this.$store.dispatch("headerTitle", "项目");
    this.$store.dispatch("getProLists");
  },
  data: () => ({
    value: ""
  }),
  computed: {
    proLists() {
      return this.$store.state.proLists;
    }
  }
};
</script>
<style>
.topTab {
  width: 90%;
  margin: 20px auto;
  padding-bottom: 18px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.topTab span {
  display: flex;
  align-items: center;
}
.topTab img {
  width: 16px;
  height: 20px;
}
/* 项目列表 */
.projects-contain li {
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding: 18px;
  flex-direction: column;
  justify-content: space-around;
}
.projects-contain > li + li {
  border-top: 1px solid #ccc;
}
.projects-contain li .row1 {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.projects-contain li .row1 img {
  width: 20px;
}
.projects-contain li .row2 {
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.projects-contain li .row3 {
  display: flex;
  justify-content: space-between;
}
.projects-contain li .row3 img {
  width: 18px;
  height: 18px;
}
.projects-contain li .row3 span {
  display: flex;
}
</style>
