<template>
  <div class="add-job-grid">
    <input type="text" id="title" name="title" placeholder="タイトル" v-model="newJob.title" class="job-input title-input" />
    <button @click="addJob" class="add-button">追加</button>
    <textarea id="description" name="description" placeholder="説明" v-model="newJob.description" class="job-input description-textarea"></textarea>
  </div>
</template>

<script setup lang="ts">
import { store, addJob } from '../store';
import { computed } from 'vue';

const newJob = computed({
  get: () => store.newJob,
  set: (value) => store.newJob = value
});
</script>

<style scoped>
.add-job-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}
.job-input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.title-input {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.add-button {
  grid-column: 2 / 3;
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
  grid-column: 1 / span 2; /* Span across all 2 columns */
  grid-row: 2 / span 1;
  min-height: 80px; /* Double height of the first row */
  resize: vertical;
}

@media (max-width: 768px) {
  .add-job-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
  }
  .title-input {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  .add-button {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  .description-textarea {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
}
</style>

