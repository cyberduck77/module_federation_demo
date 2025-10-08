<template>
  <div class="jobs-list">
    <div v-if="jobs.length === 0" class="empty-message">求人がありません。</div>
    <ul v-else>
      <li v-for="(job, i) in jobs" :key="i" class="job-item">
        <div class="job-main">
          <span class="job-title">{{ job.title }}</span>
          <span class="job-date">{{ formatDate(job.created_at) }}</span>
        </div>
        <div class="job-company-name">会社名: {{ job.company_name }}</div>
        <div class="job-enroll">
          <span class="job-enrollments">応募数: {{ job.enrollments }} 名</span>
          <button class="job-enroll-button" @click="enrollJob(job.id, job.enrollments); $emit('enroll:job')">応募する</button>
        </div>
        <div class="job-description">{{ job.description }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { enrollJob, store } from '../store'

defineEmits(['enroll:job'])

const jobs = computed(() => store.jobs)

const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}年${month}月${day}日 ${hours}:${minutes}`;
}
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
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
}
.job-enroll {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
}
.job-enroll-button {
  padding: 0.2rem 1rem;
  background-color: #4a6baf;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
.job-company-name {
  margin-bottom: 1rem;
}
.empty-message {
  color: #999;
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
}
</style>
