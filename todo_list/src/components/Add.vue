<template>
  <div class="add-todo-grid">
    <input type="text" placeholder="タイトル" v-model="newTodo.title" class="todo-input title-input" />
    <input type="date" v-model="newTodo.date" class="todo-input date-input" />
    <button @click="addTodo" class="add-button">追加</button>
    <textarea placeholder="説明" v-model="newTodo.description" class="todo-input description-textarea"></textarea>
  </div>
</template>

<script setup lang="ts">
import { store, addTodo } from '../store';
import { computed } from 'vue';

const newTodo = computed({
  get: () => store.newTodo,
  set: (value) => store.newTodo = value
});
</script>

<style scoped>
.add-todo-grid {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}
.todo-input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.title-input {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.date-input {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.add-button {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.add-button:hover {
  background-color: #45a049;
}
.description-textarea {
  grid-column: 1 / span 3; /* Span across all 3 columns */
  grid-row: 2 / span 1;
  min-height: 80px; /* Double height of the first row */
  resize: vertical;
}

@media (max-width: 768px) {
  .add-todo-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
  }
  .title-input {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  .date-input {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  .add-button {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
  .description-textarea {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }
}
</style>

