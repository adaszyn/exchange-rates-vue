<template>
  <div class="CountrySelection">
      <div v-on:click="selectPrevCountry" class="arrow-button left"></div>
      <div class="country-name">{{selectedCountry | toString }}</div>
      <div v-on:click="selectNextCountry" class="arrow-button right"></div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  props: [],
  computed:  {
    selectedCountry: function () {
      return this.$store.getters.currentCountry
    },
    ...mapState({
      countries: state => state.rates.countries
    })
  },
  filters: {
    toString: (value) => value ? value.name : 'no country selected'
  },
  methods: {
    getNextCountry() {},
    getPrevCountry() {},
    ...mapActions([
      'selectPrevCountry',
      'selectNextCountry'
    ])
  }
}
</script>
<style>
  .CountrySelection {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .country-name {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    border: 1px solid #bbbbbb;
  }
  .arrow-button {
    background-color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 1px solid #bbbbbb;
  }
  .left, .right {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    z-index: 2;
    transition: 0.2s background-color ease;
  }
  .left:hover, .right:hover {
    background-color: rgb(233, 233, 233);
  }
  .left {
    margin-right: -25px;
    background-image: url('../../static/chevron-left.svg');
  }
  .right {
    margin-left: -25px;
    background-image: url('../../static/chevron-right.svg');
  }
  .country-name {
    height: 50px;
  }
</style>
