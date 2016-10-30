<template>
  <input v-bind:value="value" v-on:click="onClick"readonly>
</template>
<script>
  export default {
    props: {
      'value': String,
      'onClick': Function
    }
  }
</script>
<style>

</style>
