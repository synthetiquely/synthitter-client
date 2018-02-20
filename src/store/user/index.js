import api from '../../api/auth';
import { setTokenToLS } from '../../utils/jwt';

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
    async signin({ commit }, payload) {
      commit('setLoading', true);
      commit('setError', null);
      try {
        const response = await api.signin(payload);
        setTokenToLS(response.data.signin.token);
        commit('setUser', response.data.signin.user);
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
      }
    },
    signout({ commit }) {
      commit('setUser', null);
    },
  },
};
