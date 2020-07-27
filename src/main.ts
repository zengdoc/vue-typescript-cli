import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/index.less';

Vue.config.productionTip = false;

import * as ElementUI from 'element-ui';
import mock from '@/mock/index';

// mock mode
if (process.env.VUE_APP_MOCK === '1') {
    mock();
}

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
