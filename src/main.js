// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import store from './store/index'
import VueMTouch from 'vue-m-touch'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(VueMTouch)

Vue.use(MuseUI)

Vue.use(Mint)

Vue.config.productionTip = false
// Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
