import Vue from 'vue';
import { reduxStorePlugin } from 'redux-vue';
import VueRouter from 'vue-router';
import App from './App';
import {store} from './configureStore';
import {router} from './router';

Vue.config.productionTip = false;

Vue.use(reduxStorePlugin);
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
