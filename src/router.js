// VUE路由组件
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Project from './components/Project';
import Plat from './components/Plat';
import Personal from './components/Personal';
// import ItemList from './components/ItemList';
import AllVip from './components/AllVip';
import PlatInfo from './components/PlatInfo';
import PlatAbout from './components/PlatAbout';
import PlatConnect from './components/PlatConnect';
import PlatHelp from './components/PlatHelp';
import VipRule from './components/VipRule';
import VipApply from './components/VipApply';
import VipDetails from './components/VipDetails';
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
      // children: [
      //   // 首页内的三类项目用子路由
      //   {
      //     path: '',
      //     component: ItemList
      //   },
      //   {
      //     path: '',
      //     component: ItemList
      //   }
      // ]
    },
    {
      path: '/project',
      component: Project
    },
    {
      path: '/plat',
      component: Plat
    },
    {
      path: '/Personal',
      component: Personal
    },
    {
      path: '/plat/allVip',
      component: AllVip
    },
    {
      path: '/plat/PlatInfo',
      component: PlatInfo
    },
    {
      path: '/plat/PlatAbout',
      component: PlatAbout
    },
    {
      path: '/plat/PlatConnect',
      component: PlatConnect
    },
    {
      path: '/plat/PlatHelp',
      component: PlatHelp
    },
    {
      path: '/plat/allVip/vipRule',
      component: VipRule
    },
    {
      path: '/plat/allVip/vipApply',
      component: VipApply
    },
    {
      path: '/plat/allVip/vipdetails/:id',
      component: VipDetails
    }
  ],
  mode: 'history'
});
export default router;
