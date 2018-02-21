import authApi from '../../api/auth';
import userApi from '../../api/user';
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
    updateUser(state, payload) {
      state.user = {
        ...state.user,
        ...payload,
      };
    },
  },
  actions: {
    async signup({ commit }, payload) {
      commit('setLoading', true);
      commit('setError', null);
      try {
        await authApi.signup(payload);
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
        const response = await authApi.signin(payload);
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
    async uploadUserAvatar({ commit }, payload) {
      commit('setLoading', true);
      commit('setError', null);
      try {
        const response = await userApi.uploadAvatar(payload);
        commit('updateUser', {
          avatar: response.data,
        });
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
      }
    },
  },
};
