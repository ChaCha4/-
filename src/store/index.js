import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex);
const store = () =>
  new Vuex.Store({
    state: {
      title: '',
      VIPLists: [],
      details: {}
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
      }
    }
  });

export default store;
