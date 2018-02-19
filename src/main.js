import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Button from './components/Common/FormFields/Button.vue';
import Input from './components/Common/FormFields/Input.vue';

Vue.component('Button', Button);
Vue.component('TextInput', Input);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
