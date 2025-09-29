<template>
  <div class="advertisement-page">
    <!-- ヘッダーセクション -->
    <header class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">🚀 エンジニア募集中！</h1>
        <p class="hero-subtitle">最先端技術で未来を創造する仲間を探しています</p>
        <div class="hero-badges">
          <span class="badge">リモートワーク可</span>
          <span class="badge">フレックス制</span>
          <span class="badge">年収600万円〜</span>
        </div>
      </div>
    </header>

    <!-- 会社の魅力セクション -->
    <section class="features-section">
      <h2>なぜ私たちと一緒に働くべきか？</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">💻</div>
          <h3>最新技術スタック</h3>
          <p>React、Vue.js、Node.js、Python、AWSなど最新の技術を使って開発できます</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🏠</div>
          <h3>働き方の自由</h3>
          <p>完全リモートワーク対応、フレックスタイム制で自分のペースで働けます</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📈</div>
          <h3>成長機会</h3>
          <p>技術研修費全額支給、カンファレンス参加支援、メンター制度完備</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>やりがいのあるプロジェクト</h3>
          <p>社会にインパクトを与えるサービス開発に携わることができます</p>
        </div>
      </div>
    </section>

    <!-- 求人一覧セクション -->
    <section class="jobs-section">
      <h2>🔍 エンジニア求人一覧</h2>
      <p class="jobs-description">
        現在募集中のエンジニアポジションをご覧ください。気になる求人があれば、すぐに応募できます！
      </p>
      <div class="jobs-grid">
        <Enrollments @enroll:job="handleEnrollment" />
      </div>
    </section>

    <!-- CTAセクション -->
    <section class="cta-section">
      <h2>あなたの技術で世界を変えませんか？</h2>
      <p>私たちと一緒に、次世代のテクノロジーを創造しましょう。</p>
      <div class="cta-buttons">
        <button class="cta-primary" @click="scrollToJobs">求人を見る</button>
        <button class="cta-secondary" @click="openContactForm">お問い合わせ</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import Enrollments from 'joblist/Enrollments'

const handleEnrollment = () => {
  alert('ご応募ありがとうございます！担当者より3営業日以内にご連絡いたします。')
}

const scrollToJobs = () => {
  const jobsSection = document.querySelector('.jobs-section')
  if (jobsSection) {
    jobsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const openContactForm = () => {
  alert('お問い合わせフォームを開きます（実装予定）')
}
</script>

<style scoped>
.advertisement-page {
  min-height: 100vh;
  font-family: 'Noto Sans JP', sans-serif;
}

/* ヒーローセクション */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

/* 特徴セクション */
.features-section {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.features-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* 求人セクション */
.jobs-section {
  background: #f8f9fa;
  padding: 4rem 2rem;
  margin: 0 auto;
}

.jobs-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

/* Jobs grid container */
.jobs-grid {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 0 1rem;
}

/* Enrollments component styling */
.jobs-section :deep(.jobs-list) {
  margin: 0;
  padding: 0;
}

.jobs-section :deep(.jobs-list ul) {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.jobs-section :deep(.job-item) {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  border: 1px solid #f0f0f0;
  margin-bottom: 2rem;
}

.jobs-section :deep(.job-item:hover) {
  transform: translateY(-5px);
}

.jobs-section :deep(.job-main) {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.jobs-section :deep(.job-title) {
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  line-height: 1.3;
}

.jobs-section :deep(.job-date) {
  font-size: 0.85rem;
  color: #888;
  background: #f8f9fa;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  white-space: nowrap;
}

.jobs-section :deep(.job-description) {
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
  white-space: pre-wrap;
}

.jobs-section :deep(.job-enroll) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.jobs-section :deep(.job-enrollments) {
  font-size: 0.9rem;
  color: #666;
  background: #e8f4f8;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
}

.jobs-section :deep(.job-enroll-button) {
  padding: 0.8rem 1.5rem !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white;
  border: none;
  border-radius: 8px !important;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.jobs-section :deep(.job-enroll-button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.jobs-section :deep(.empty-message) {
  color: #999;
  text-align: center;
  margin-top: 4rem;
  font-size: 1.1rem;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.jobs-description {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* CTAセクション */
.cta-section {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-primary, .cta-secondary {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.cta-primary {
  background: white;
  color: #4facfe;
}

.cta-primary:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
}

.cta-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-secondary:hover {
  background: white;
  color: #4facfe;
  transform: translateY(-2px);
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .features-section h2,
  .jobs-section h2,
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-primary, .cta-secondary {
    width: 100%;
    max-width: 300px;
  }
  
  /* Enrollments responsive styles */
  .jobs-section :deep(.jobs-list ul) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .jobs-section :deep(.job-item) {
    padding: 1.5rem;
  }
  
  .jobs-section :deep(.job-main) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .jobs-section :deep(.job-enroll) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .jobs-section :deep(.job-enroll-button) {
    width: 100%;
  }
}
</style>
