import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { REQUEST_STATUSES } from '@/constants/REQUEST_STATUSES'

import ratesBuilder from '@/helpers/ratesBuilder'

Vue.use(Vuex)
const state = {
  status: REQUEST_STATUSES.loading,
  rates: {},
}

const mutations = {
  SET_RATES: (state, payload) => {
    state.rates = ratesBuilder(payload)
  },
  SET_STATUS: (state, payload) => {
    state.status = payload
  },
}

const actions = {
  LOAD_CURRENCIES: ({ commit }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'rates?JSON',
        })

        commit('SET_RATES', data)
        commit('SET_STATUS', REQUEST_STATUSES.success)
        resolve()
      } catch (err) {
        commit('SET_STATUS', REQUEST_STATUSES.error)
        reject(err)
      }
    })
  },
}

const getters = {
  ratesStatus: (store) => store.status,
  rates: (store) => store.rates,
}

export default {
  state,
  getters,
  mutations,
  actions,
}
