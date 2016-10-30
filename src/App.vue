<template>
  <div id="app">
    <navbar />
    <country-selection />
    <rates-chart />
    <rates-table />
  </div>
</template>

<script>
import CountrySelection from './components/CountrySelection.vue';
import RatesTable from './components/RatesTable.vue';
import RatesChart from './components/RatesChart.vue';
import Navbar from './components/Navbar.vue';
import Vuex from 'vuex'
import Vue from 'vue'
import uniq from "lodash/uniq"
const sampleData = require('./data/sample.json')
import store from './store'
import '../static/normalize.css'
import '../static/skeleton.css'

// LOADING SAMPLE DATA
uniq(sampleData.data.map((el) => el.country)).forEach((el) => store.dispatch('addCountry', el))
for (let data of sampleData.data) {
  store.dispatch('addRate', {
    country: data.country,
    sell: data.sell,
    date: data.date,
    buy: data.buy
  })
}
export default {
  store,
  name: 'app',
  components: {
    CountrySelection,
    RatesChart,
    Navbar,
    RatesTable
  },
  data: () => ({
  }),
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
