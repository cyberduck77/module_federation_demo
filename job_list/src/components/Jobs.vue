<template>
  <div class="add-job-grid">
    <input type="text" id="title" name="title" placeholder="タイトル" v-model="newJob.title"
      class="job-input title-input" />
    <select id="type" name="type" v-model="newJob.type" class="job-input type-select">
      <option :value="null" disabled>求人のポジション</option>
      <option value="engineer">エンジニア</option>
      <option value="manager">マネージャー</option>
      <option value="director">ディレクター</option>
    </select>
    <button @click="addJob" class="add-button">追加</button>
    <textarea id="description" name="description" placeholder="説明" v-model="newJob.description"
      class="job-input description-textarea"></textarea>
  </div>
  <div class="jobs-list">
    <div v-if="jobs.length === 0" class="empty-message">求人がありません。</div>
    <ul v-else>
      <li v-for="(job, i) in jobs" :key="i" class="job-item">
        <div class="job-main">
          <span class="job-title">{{ job.title }}</span>
          <span class="job-date">{{ formatDate(job.created_at) }}</span>
        </div>
        <div class="job-description">{{ job.description }}</div>
        <div class="job-delete">
          <button class="job-delete-button" @click="deleteJob(job.id)">削除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { store } from '../store';
import { useApis } from '../api';

const { deleteJob, addJob } = useApis()

const jobs = computed(() => store.jobs);

const newJob = computed({
  get: () => store.newJob,
  set: (value) => store.newJob = value
});

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
.add-job-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
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

.type-select {
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
  grid-column: 1 / span 3;
  /* Span across all 2 columns */
  grid-row: 2 / span 1;
  min-height: 80px;
  /* Double height of the first row */
  resize: vertical;
}

@media (max-width: 768px) {
  .add-job-grid {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto auto auto;
  }

  .title-input {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .type-select {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .add-button {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }

  .description-textarea {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
}
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
  margin-bottom: 1rem;
}
.job-delete {
  display: flex;
  justify-content: flex-end;
}
.job-delete-button {
  border: none;
  border-radius: 4px;
  padding: 0.2rem 1rem;
  background-color: #c11b1b;
  color: white;
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
.empty-message {
  color: #999;
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
}
</style>
