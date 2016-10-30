<template>
  <div>
    <canvas ref="chartRef"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js"
import moment from "moment"
let chart = null;
export default {
  updated() {
    console.log('updated');
    if (chart) {
      chart.destroy();
    }
    console.log(this.$store.getters.selectedCountry.results);
    chart = initializeChart(this.$refs.chartRef, this.$store.getters.selectedCountry.results)
  },
  mounted() {
    if (chart) {
      chart.destroy();
    }
    chart = initializeChart(this.$refs.chartRef, this.$store.getters.selectedCountry.results)
  },
  props: [],
  data: function() {return {

  }},
  watch: {
    results: function () {
      if (chart) {
        chart.destroy();
      }
      chart = initializeChart(this.$refs.chartRef, this.$store.getters.selectedCountry.results)
    }
  },
  computed: {
    results: function() {
      return this.$store.getters.selectedCountry.results
    }
  }
}

function initializeChart(ctx, results) {
  const sortedResults = results.concat().sort((r1, r2) => r1.date - r2.date);
  const min = Math.min(...sortedResults.map(r => r.sell), ...sortedResults.map(r => r.buy));
  const max = Math.max(...sortedResults.map(r => r.sell), ...sortedResults.map(r => r.buy));
  const delta = Math.abs(max - min);
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: sortedResults.map(res => res.date),
      datasets: [{
        label: "Sell",
        fill: false,
        borderColor: '#f2000b',
        backgroundColor: '#FFFFFF',
        data: sortedResults.map(res => res.sell),
      }, {
        label: "Buy",
        fill: false,
        backgroundColor: '#FFFFFF',
        borderColor: '#032b74',
        data: sortedResults.map(res => res.buy),
      }]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              'millisecond': 'MMM DD',
              'second': 'MMM DD',
              'minute': 'MMM DD',
              'hour': 'MMM DD',
              'day': 'MMM DD',
              'week': 'MMM DD',
              'month': 'MMM DD',
              'quarter': 'MMM DD',
              'year': 'MMM DD',
            }
          }
        }],
        yAxes: [{
          ticks: {
            min: min - delta,
            max: max + delta
          }
        }]
      },
    }
  });
}
</script>
<style>
</style>
