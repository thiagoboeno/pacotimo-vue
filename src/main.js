import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './plugins/axios-setup';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlane, faRoad, faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlane, faRoad, faHotel);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
