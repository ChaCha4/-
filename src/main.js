import Vue from 'vue';
// import { Button, Cell } from 'mint-ui';
import App from './App.vue';
// 引入header栏的ui
// 引入底部tabbar栏的ui
// 引入搜索栏
// 引入轮播图Swipe，可自定义轮播时间间隔，动画时长等
// 引入 Navbar
// 引入单元格，plat模块中用到的
// 引入按钮
import {
  Tabbar,
  TabItem,
  Search,
  Header,
  Swipe,
  SwipeItem,
  Navbar,
  Cell,
  Button
} from 'mint-ui';
// 引入vue路由组件
import router from './router';
// 引入store状态管理
import store from './store';

Vue.config.productionTip = false;
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Search.name, Search);
Vue.component(Cell.name, Cell);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
