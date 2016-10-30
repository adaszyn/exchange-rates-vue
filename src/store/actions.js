import { ADD_COUNTRY, INCREMENT_COUNTRY_ID, DECREMENT_COUNTRY_ID, ADD_RATE } from './mutation-types'
export const addCountry = ({commit}, countryName) => {
  commit(ADD_COUNTRY, countryName)
}
export const addRate = ({commit}, result) => commit(ADD_RATE, result)
export const selectPrevCountry = ({commit}) => commit(DECREMENT_COUNTRY_ID)
export const selectNextCountry = ({commit}) => commit(INCREMENT_COUNTRY_ID)

