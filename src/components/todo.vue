<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span style="color:green">{{getMsg}}</span>
    <h5>{{error}}</h5>
    <input type="text" v-model="task">
    <button @click="addData()">add todo</button>
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
            <button @click="deleteData(info.id)">X</button>
            <router-link :to="{name:'edit',params:{id: info.id}}">Edit</router-link>
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
      msg: 'Todo app',
      task: null,
      skills:["php","python","perl","javaScript"],
      getInfo:{},
      error: null,
      getMsg: null
    }
  },
  methods: {
      addData(){
          var newTask = this.task
          var len = newTask.length
          console.log(len);
          if(len>0){
           
              //this.getInfo.push(this.task)
              axios.post('http://localhost:8000/api/todo',{task: newTask}).then((res)=>{
                this.getData()
                this.getMsg = 'Data added Successfully!'
                var _this = this
                 setInterval(function(){
                 _this.getMsg = ''
                },1500);
              }).catch((error)=>{
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
          //this.error = error
        })
      },
      deleteData(id){
        axios.delete('http://localhost:8000/api/todo/'+id).then((res)=>{
          //console.log(res.data);
          var msg = res.data
               this.getData()
               this.getMsg = msg
               var v = this
                setInterval(function(){
                 v.getMsg = ''
                },1500);
        })
         //this.getInfo.splice(index,1)
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


