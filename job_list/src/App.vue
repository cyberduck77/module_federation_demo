<template>
  <header class="app-header">
    <h1>求人情報管理</h1>
  </header>

  <main>
    <Search />
    <Jobs />
  </main>
</template>

<script setup lang="ts">
import Search from './components/Search.vue';
import Jobs from './components/Jobs.vue';
</script>

<style scoped>
body {
  background: #f5f6fa;
}
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f6fa;
  padding: 2rem 0;
}
.app-header {
  text-align: center;
  margin-bottom: 1rem;
}
.app-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #4a6cf7;
  margin: 0;
  letter-spacing: -0.5px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  position: relative;
  display: inline-block;
}
.app-header h1::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #4a6cf7, #6c8eff);
  border-radius: 2px;
}
main {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  margin: 2rem auto 0 auto;
}
</style>
