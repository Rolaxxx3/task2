import Vue from 'vue'
import Vuex from 'vuex'
import currencyRates from './currencyRates.module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    currencyRates,
  },
})

export default store
