import { ADD_COUNTRY, SELECT_COUNTRY_BY_ID, ADD_RATE, DECREMENT_COUNTRY_ID, INCREMENT_COUNTRY_ID } from '../mutation-types'
let currentIndex = 0;
import moment from 'moment'
export const state = {
    countries: [],
    selectedCountryId: -1
}

const mutations = {
  [ADD_COUNTRY]: (state, countryName) => {
    let newCountry = {
      id: currentIndex++,
      name: countryName,
      results: []
    };
    state.countries.push(newCountry)
    if (state.selectedCountryId === -1) {
      state.selectedCountryId = newCountry.id
    }
  },
  [ADD_RATE](state, {country, sell, buy, date}) {
    const countryObj = state.countries.find((c) => c.name === country)
    if (countryObj) {
      countryObj.results.push({sell, buy, date: moment(date)})
    }
  },
  [SELECT_COUNTRY_BY_ID](state, id) {
    const selectedCountry = state.countries.find((country) => country.id === id)
    if (selectedCountry) {
      state.selectedCountry = selectedCountry;
    }
  },
  [DECREMENT_COUNTRY_ID](state) {
    state.selectedCountryId = state.selectedCountryId === 0
      ? state.countries.length - 1
      : state.selectedCountryId - 1
  },
  [INCREMENT_COUNTRY_ID](state) {
    state.selectedCountryId = state.selectedCountryId === state.countries.length - 1
      ? 0
      : state.selectedCountryId + 1
  },

}
const getters = {
  selectedCountry: state => state.countries.find((country) => country.id === state.selectedCountryId)
}

export default {
  state,
  mutations,
  getters
}
