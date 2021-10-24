<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{this.$route.params.id}}</h1>
    <input type="text" v-model="task.task">
    <button @click="updateData()">Submit</button>
  </div>
</template>
<script>
const axios = require('axios').default;
export default {
  name: 'edit',
  data () {
    return {
        msg: 'myTodo edit page',
        task: null
     
    }
  },
  methods: {
      getData(){
          let id = this.$route.params.id;
          axios.get('http://localhost:8000/api/todo/'+id).then((data)=>{
              //console.log(data.data);
              this.task = data.data
          })
      },
      updateData(){
          let newData = this.task
          let id = this.$route.params.id;
         //axios.patch
          axios.patch('http://localhost:8000/api/todo/'+id,{task:newData.task}).then((response)=>{
              console.log(response);
              this.$router.push({name:'Todo'})
          })

      }

  },
  mounted: function(){
   this.getData()
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


