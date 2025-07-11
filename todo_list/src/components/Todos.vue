<template>
  <div class="todos-list">
    <div v-if="todos.length === 0" class="empty-message">タスクがありません。</div>
    <ul v-else>
      <li v-for="(todo, i) in todos" :key="i" class="todo-item">
        <div class="todo-main">
          <span class="todo-title">{{ todo.title }}</span>
          <span class="todo-date">{{ todo.date }}</span>
        </div>
        <div class="todo-description">{{ todo.description }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { store } from '../store';

const todos = computed(() => store.finalizedTodos);
</script>

<style scoped>
.todos-list {
  margin-top: 1rem;
}
.todo-item {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #fafafa;
}
.todo-main {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.5rem;
}
.todo-title {
  font-weight: bold;
  font-size: 1.1rem;
}
.todo-description {
  color: #555;
}
.todo-date {
  font-size: 0.9rem;
  line-height: 1.75rem;
  color: #888;
}
.empty-message {
  color: #999;
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
}
</style>
