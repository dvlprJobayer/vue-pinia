<template>
  <button style="margin-top: 1rem" @click="addTodo">Add Todo</button>
  <h1>All Todo</h1>
  <ul>
    <SingleTodo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
  <h1>Pending Todo</h1>
  <ul>
    <SingleTodo v-for="todo in pending" :key="todo.id" :todo="todo" />
  </ul>
  <h1>Completed Todo</h1>
  <ul>
    <SingleTodo v-for="todo in completed" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import { useTodoStore } from "../stores/todoStore";
import { mapState } from "pinia";
import SingleTodo from "../components/SingleTodo.vue";

export default {
  name: "TodoView",
  components: {
    SingleTodo,
  },
  computed: {
    ...mapState(useTodoStore, {
      todos: "allTodo",
      pending: "pendingTodo",
      completed: "completedTodo",
    }),
  },
  methods: {
    addTodo() {
      useTodoStore().add({
        id: Math.random(),
        title: "Todo " + (this.todos.length + 1),
        completed: false,
      });
    },
  },
};
</script>
