import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Signup from '../components/User/Signup.vue';
import Signin from '../components/User/Signin.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Home,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
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
