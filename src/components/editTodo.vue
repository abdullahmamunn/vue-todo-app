<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="name">
    <button @click="addData">Submit</button>
  </div>
</template>
<script>
const axios = require('axios').default;
export default {
  name: 'edit',
  data () {
    return {
        msg: 'This is myTodo edit page'
     
    }
  },
  methods: {
      
  },
  mounted: function(){
   
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


