<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">
      Clear All
    </span>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "TodoFooter",
  methods : {
    ...mapMutations({clearTodo:'clearTodoItem'})
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 0.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn{
  color: #e20303;
  display: block;
}


</style>