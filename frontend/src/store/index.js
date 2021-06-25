import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const mutations = {
  INCREMENT_COUNT: 'increment count',
};

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    [mutations.INCREMENT_COUNT](state) {
      state.count++;
    },
  },
  actions: {
    incrementCount({ commit }) {
      commit(mutations.INCREMENT_COUNT);
    },
    async fetchUser(store, id) {
      const userRequest = await axios.get(`/api/users/${id}`);
      return userRequest.data;
    },
    async fetchUsers() {
      const usersRequest = await axios.get('/api/users');
      return usersRequest.data;
    },
  },
  modules: {},
});
