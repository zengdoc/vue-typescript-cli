import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/index.less';

Vue.config.productionTip = false;

import * as ElementUI from 'element-ui';
Vue.use(ElementUI);

if (process.env.VUE_APP_MOCK === 'true') {
    import('@/mock/index')
        .then(({ default: mock }) => {
            mock();
            init();
        });
} else {
    init();
}

function init() {
    new Vue({
        router,
        render: h => h(App),
    }).$mount('#app');
}
