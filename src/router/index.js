import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/todo';
import Edit from '@/components/editTodo';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    }
  ]
})
