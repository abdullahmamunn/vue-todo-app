<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>{{error}}</h4>
    <input type="text" v-model="task">
    <button @click="addData()">add skill</button>
     <table>
      <tr>
        <th>Sl</th>
        <th>task</th>
        <th>action</th>
      </tr>
      <tr v-for="(info,index) in getInfo" :key="info.id">
        <td>{{++index}}</td>
        <td>{{info.task}}</td>
        <td>
            <button @click="deleteData(index)">X</button>
            <router-link to="/edit">Edit</router-link>
        </td>
      </tr>
     </table>
   
  </div>
</template>
<script>
const axios = require('axios').default;
export default {
  name: 'todo',
  data () {
    return {
      msg: 'This is my todo app',
      task: null,
      skills:["php","python","perl","javaScript"],
      getInfo:{},
      error: null
    }
  },
  methods: {
      addData(){
          var newTask = this.task
          var len = newTask.length
          console.log(newTask);
          if(len>0){
            //console.log(task);
              //this.getInfo.push(this.task)
              axios.post('http://localhost:8000/api/todo',{task: newTask}).then((res)=>{
                this.getData()
                console.log(res);
              }).catch((error)=>{
                this.error = error.Error
                console.log(error);
              })
          }else{  
             alert("please fill the form")
          }
          this.task = ''
      },
      getData(){
        axios.get('http://localhost:8000/api/todo').then((res)=>{
          this.getInfo = res.data
        }).catch((error)=>{
          console.log(error);
          this.error = error
        })
      },
      deleteData(index){
         this.getInfo.splice(index,1)
      }
  },
  mounted: function(){
    this.getData()
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
    list-style: none;
}
table{
  margin: 0 auto;
    width: 21%;
    margin-top: 10px;
}
</style>


