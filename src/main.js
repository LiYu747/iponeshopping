import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import api from './http/api'
import { IndexBar, IndexAnchor } from 'vant';
import { Lazyload } from 'vant';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
Vue.use(Lazyload);

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$api = api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
