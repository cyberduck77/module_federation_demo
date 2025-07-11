<template>
  <div class="search-bar-container">
    <input
      v-model="searchText"
      type="text"
      placeholder="検索..."
      class="search-input"
    />
    <select v-model="selectedDate" class="date-select">
      <option value="">すべての日付</option>
      <option v-for="date in dateOptions" :key="date" :value="date">
        {{ date }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { store, search, selectDate } from '../store';

const searchText = computed({
  get: () => store.searchText,
  set: (value) => search(value)
})

const selectedDate = computed({
  get: () => store.dateFilter,
  set: (value) => selectDate(value)
})

const dateOptions = computed(() => {
  const days: string[] = [];
  const now = new Date();
  for (let i = 10; i >= -10; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    days.push(formatDate(d));
  }
  return days;
});

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

</script>

<style scoped>
.search-bar-container {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}
.search-input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
.date-select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
