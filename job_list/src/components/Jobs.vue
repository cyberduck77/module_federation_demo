<template>
  <div class="jobs-list">
    <div v-if="jobs.length === 0" class="empty-message">タスクがありません。</div>
    <ul v-else>
      <li v-for="(job, i) in jobs" :key="i" class="job-item">
        <div class="job-main">
          <span class="job-title">{{ job.title }}</span>
          <span class="job-date">{{ formatDate(job.created_at) }}</span>
        </div>
        <div class="job-description">{{ job.description }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { store } from '../store';

const jobs = computed(() => store.jobs);

const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}年${month}月${day}日 ${hours}:${minutes}`;
};
</script>

<style scoped>
.jobs-list {
  margin-top: 1rem;
}
.job-item {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #fafafa;
}
.job-main {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.5rem;
}
.job-title {
  font-weight: bold;
  font-size: 1.1rem;
}
.job-description {
  color: #555;
  white-space: pre-wrap;
}
.job-date {
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
