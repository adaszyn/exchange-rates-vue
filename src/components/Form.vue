<template>
  <div class="Form">
    <form>
      <h1>{{name}}::{{age * 2}}</h1>
      <div>
        <input type="text" v-model.trim="name"/>
        <readonly-input v-bind:value="name" v-bind:onClick="onInputClick"/>
      </div>
      <div>
        <input type="number" v-model.number="age">
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  import ReadonlyInput from './CustomInput.vue'
  export default {
    name: "aaa",
    components: {
      'readonly-input': ReadonlyInput
    },
    data() {
      return {
        name: "",
        checked: false,
        age: 10
      }
    },
    methods: {
      onInputClick: () => console.log("input clicked")
    }
  }
</script>
<style scoped>
  .Form {
    background-color: antiquewhite;
    border: 2px solid darkslategrey;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
  }
</style>
