import Vue from 'vue';
import './plugins/axios'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { createProvider } from './vue-apollo';
import i18n from './i18n'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  provide: createProvider().provide(),
  i18n,
  render: h => h(App)
}).$mount('#app');
