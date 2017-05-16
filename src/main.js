// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Vue2Filters from 'vue2-filters'
import VueMTouch from 'vue-m-touch'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(VueMTouch)

Vue.use(Vue2Filters)

Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
