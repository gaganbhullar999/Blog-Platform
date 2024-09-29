
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import the store

Vue.config.productionTip = false;

new Vue({
  router,
  store, // Add the store here
  render: h => h(App),
}).$mount('#app');
