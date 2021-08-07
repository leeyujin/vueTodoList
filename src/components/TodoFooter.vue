<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">
      Clear All
    </span>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  methods : {
    clearTodo(){
      // this.$emit('clearTodo');
      this.$store.commit('clearTodoItem');
    }
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