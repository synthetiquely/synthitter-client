import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Button from './components/Common/FormFields/Button.vue';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

Vue.component('Button', Button);
