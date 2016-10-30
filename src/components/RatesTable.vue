<template>
  <div>
    <table class="u-full-width">
    <thead>
    <tr>
      <th>Date</th>
      <th>Buy</th>
      <th>Sell</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="result in results">
      <td>{{result.date.format('ll')}}</td>
      <td>{{result.buy}}</td>
      <td>{{result.sell}}</td>
    </tr>
    </tbody>
  </table></div>
</template>
<script>
export default {
    props: [],
    computed: {
      results: function() {
        return [].concat(this.$store.getters.selectedCountry.results).sort((r1,r2) => r1.date - r2.date)
      }
    }
}
</script>
<style>
</style>
