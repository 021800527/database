import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dataV from '@jiaminghi/data-view'
import axios from 'axios'
import elementui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import qs from 'qs'
import animate from 'animate.css'
Vue.prototype.$axios = axios
Vue.prototype.qs = qs

Vue.use(animate)
Vue.use(elementui)
Vue.use(dataV)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
