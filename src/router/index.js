import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Signup from '../components/User/Signup.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/user/signup',
      name: 'Signup',
      component: Signup,
    },
  ],
  mode: 'history',
});
