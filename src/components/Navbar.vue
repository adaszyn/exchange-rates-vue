<template>
  <div class="Navbar">
    <img v-bind:src="imageUrl">
    <h1>Baksy</h1>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data: function () {
      return {
        imageUrl: require('../../static/graph-line.svg')
      }
    }
  };
</script>

<style>
  .Navbar {
    background-color: lightseagreen;
    color: white;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Navbar > h1 {
    margin: 0;
  }
</style>
