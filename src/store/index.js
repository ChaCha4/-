import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex);
const store = () =>
  new Vuex.Store({
    state: {
      title: '',
      VIPLists: [],
      details: {},
      infoLists: [],
      infoDetails: {},
      proLists: [],
      proDetails: {}
    },
    mutations: {
      headerTitle(state, title) {
        state.title = title;
      },
      // 获取VIP列表在所有VIP页面展示出来
      getVIPLists(state, VIPLists) {
        state.VIPLists = VIPLists;
      },
      // 获取详情，并在VIP详情页展示
      getVIPDetails(state, details) {
        state.details = details;
      },
      // 获取资讯列表
      getInfoLists(state, infoLists) {
        state.infoLists = infoLists;
      },
      // 获取咨询详情
      getInfoDetails(state, infoDetails) {
        state.infoDetails = infoDetails;
      },
      // 获取项目列表
      getProLists(state, proLists) {
        state.proLists = proLists;
      },
      // 获取项目详情，并在详情页展示
      getProDetails(state, proDetails) {
        state.proDetails = proDetails;
      }
    },
    actions: {
      headerTitle({ commit }, title) {
        commit('headerTitle', title);
      },
      getVIPLists({ commit }) {
        Axios.get('http://localhost:3008/VIPLists').then(res => {
          commit('getVIPLists', res.data);
        });
      },
      getVIPDetails({ commit }, id) {
        Axios.get(`http://localhost:3008/VIPLists/${id}`).then(res => {
          commit('getVIPDetails', res.data);
        });
      },
      getInfoLists({ commit }) {
        Axios.get('http://localhost:3008/infoLists').then(res => {
          commit('getInfoLists', res.data);
        });
      },
      getInfoDetails({ commit }, id) {
        Axios.get(`http://localhost:3008/infoLists/${id}`).then(res => {
          commit('getInfoDetails', res.data);
        });
      },
      getProLists({ commit }) {
        Axios.get('http://localhost:3008/proLists').then(res => {
          commit('getProLists', res.data);
        });
      },
      getProDetails({ commit }, id) {
        Axios.get(`http://localhost:3008/proLists/${id}`).then(res => {
          commit('getProDetails', res.data);
        });
      }
    }
  });

export default store;
