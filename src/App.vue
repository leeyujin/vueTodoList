<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:passItem="addTodoItem"></TodoInput>
    <TodoList
        v-bind:propsdata="todoItems"
        v-on:removeItem="removeTodoItem"
        v-on:toggleItem="toggleTodoItem"
    ></TodoList>
    <TodoFooter v-on:clearTodo="clearTodoItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";

export default {
  data(){
    return {
      todoItems : []
    }
  },
  methods : {
    addTodoItem(todoItem){
      const obj = {item : todoItem, completed : false}
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeTodoItem(removeItem, index){
      localStorage.removeItem(removeItem);
      this.todoItems.splice(index,1);
    },
    toggleTodoItem(todoItem,index){
      // anti pattern. 하위 오브젝트에서 직접 상위 오브젝트값 참조
      // todoItem.completed = ! todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearTodoItem(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created(){
    if ( localStorage.length > 0 ){
      for( let i = 0 ; i < localStorage.length ; i ++) {
        if( localStorage.key(i) !== 'loglevel:webpack-dev-server' ){
          let obj = JSON.parse( localStorage.getItem( localStorage.key(i) ));
          this.todoItems.push( obj );
        }
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body{
  text-align:center;
  background-color: #F6F6F6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}

</style>
