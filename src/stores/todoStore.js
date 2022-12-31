import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [
      { id: 1, title: "Todo 1", completed: true },
      { id: 2, title: "Todo 2", completed: false },
      { id: 3, title: "Todo 3", completed: true },
      { id: 4, title: "Todo 4", completed: false },
    ],
  }),
  actions: {
    add(todo) {
      this.todos.push(todo);
    },
    remove(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    changeStatus(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.completed = !todo.completed;
    },
  },
  getters: {
    allTodo: (state) => state.todos,
    pendingTodo: (state) => state.todos.filter((todo) => !todo.completed),
    completedTodo: (state) => state.todos.filter((todo) => todo.completed),
  },
});
