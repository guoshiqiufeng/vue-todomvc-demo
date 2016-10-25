<template>
    <section class="todoapp">
      <Headers></Headers>
     <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-on:click="toggleAll()">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li v-for="todo in todos| equalCompare selector" v-bind:class="{'completed':todo.completed}">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed">
              <label>{{todo.text}}</label>
              <button class="destroy" v-on:click="removeTodo($index)"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count"><strong>{{todos.length}}</strong> item left</span>
        <ul class="filters">
          <li>
            <a v-bind:class="{'selected':selector.completed==undefined}" href="#/" v-on:click="filters(undefined)">All</a>
          </li>
          <li>
            <a v-bind:class="{'selected':selector.completed==false}" href="#/active" v-on:click="filters(false)">Active</a>
          </li>
          <li>
            <a v-bind:class="{'selected':selector.completed==true}" href="#/completed" v-on:click="filters(true)">Completed</a>
          </li>
        </ul>
        <button class="clear-completed" v-on:click="clear">Clear completed</button>
      </footer>
    </section>
    <Info></Info>

</template>
<script>
import Headers from './components/Header'
import Info from './components/Info'

export default {
  components: {
    Headers,
    Info
  },
  data () {
    return {
      todos: [
        {
          id: 1,
          text: '学习',
          completed: true
        },
        {
          id: 2,
          text: '睡觉',
          completed: false
        },
        {
          id: 3,
          text: '敲代码',
          completed: true
        }
      ],
      selector: { completed: undefined }
    }
  },
  methods: {
    removeTodo (index) {
      this.todos.splice(index, 1)
    },
    clear () {
      var result = []
      for (var i = 0; i < this.todos.length; i++) {
        if (!this.todos[i].completed) {
          result.push(this.todos[i])
        }
      }
      this.todos = result
    },
    toggleAll () {
      var now = true
      for (var i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = now
      }
      now = !now
    }
  },
  filters: {
    equalCompare (value, filter) {
      var result = []
      console.log(filter)
      if (filter.completed === undefined) {
        for (var i = 0; i < value.length; i++) {
          result.push(value[i])
        }
      } else if (filter.completed) {
        for (var ii = 0; ii < value.length; ii++) {
          if (value[ii].completed) {
            result.push(value[ii])
          }
        }
      } else {
        for (var iii = 0; iii < value.length; iii++) {
          if (!value[iii].completed) {
            result.push(value[iii])
          }
        }
      }
      return result
    }
  }
}
</script>

<style>
  @import "../node_modules/todomvc-app-css/index.css";
</style>
