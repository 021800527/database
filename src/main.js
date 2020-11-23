import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dataV from '@jiaminghi/data-view'
import axios from 'axios'
import qs    from 'qs'
import animate from 'animate.css'
Vue.prototype.$axios= axios
Vue.prototype.qs = qs

Vue.use(animate)
Vue.use(dataV)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
