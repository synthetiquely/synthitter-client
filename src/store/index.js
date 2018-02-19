import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import helpers from './helpers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    helpers,
  },
});
