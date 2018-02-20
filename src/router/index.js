import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Signup from '../components/User/Signup.vue';
import Signin from '../components/User/Signin.vue';

import AuthGuard from './authGuard';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Home,
      beforeEnter: AuthGuard,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter: AuthGuard,
    },
    {
      path: '/user/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/user/signin',
      name: 'Signin',
      component: Signin,
    },
  ],
  mode: 'history',
});
