import Vue from 'vue'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import config from '../config'

import App from './App.vue'

import store from './store'

import uppercase from '@/filters/uppercase'

axios.defaults.baseURL = config.apiUrl
axios.defaults.headers.common = {
  'Content-Type': 'application/json',
  'x-rapidapi-key': config.apiKey,
  'x-rapidapi-host': config.apiHost,
}

Vue.use(Element)

Vue.config.productionTip = false

Vue.filter('uppercase', uppercase)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
