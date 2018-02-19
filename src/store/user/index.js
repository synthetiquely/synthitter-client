import api from '../../api/auth';

export default {
  state: {
    user: null,
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async signup({ commit }, payload) {
      commit('setLoading', true);
      commit('setError', null);
      try {
        await api.signup(payload);
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
      }
    },
  },
};
