<template>
  <header class="header">
    <h1>todos</h1>
    <input v-model="newTodo" v-on:keyup.enter="addTodo"
           class="new-todo"
           placeholder="What needs to be done?"
           autofocus>
  </header>
</template>
<style>

</style>
<script>
    import util from '../util'
    export default{
      data () {
        return {
          newTodo: ''
        }
      },
      methods: {
        addTodo () {
          var text = this.newTodo.trim()
          if (text) {
            this.$parent.todos.push({text: text, id: util.getId(this.$parent.todos), completed: false})
            this.newTodo = ''
          }
        }
      }
    }
</script>

