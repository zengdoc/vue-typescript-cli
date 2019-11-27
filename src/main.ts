import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import * as ElementUI from 'element-ui';
import mock from '@/mock/index';

// mock mode
if (process.env.VUE_APP_MOCK === 'true') {
    mock();
}

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
