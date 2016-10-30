import Vuex from 'vuex'
import Vue from 'vue'
import moment from 'moment'
import rates from './modules/rates'
import * as actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    rates
  },
  getters: {
    currentCountry: state => state.rates.countries[state.rates.selectedCountryId]
  },
  actions
})
