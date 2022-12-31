<template>
  <li>
    {{ todo.title }} |
    <button style="margin-right: 1rem" @click="handleDelete">Delete</button>
    <button @click="handleChangeStatus">
      {{ todo.completed ? "Make Pending" : "Make Completed" }}
    </button>
  </li>
</template>

<script>
import { useTodoStore } from "../stores/todoStore";

export default {
  name: "SingleTodo",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDelete() {
      useTodoStore().remove(this.todo.id);
    },
    handleChangeStatus() {
      useTodoStore().changeStatus(this.todo.id);
    },
  },
};
</script>

<style scoped></style>
