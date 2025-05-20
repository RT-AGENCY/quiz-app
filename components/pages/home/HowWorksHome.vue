<template>
  <!-- Бонусная секция: Как это работает (для SEO и UX) -->
  <section aria-labelledby="how-it-works" class="how-it-works-section">
    <div class="container">
      <h2 id="how-it-works" class="section-title">Как играть в наши квизы</h2>
      <div class="steps-container">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Выберите категорию</h3>
          <p>
            Найдите квиз по интересующей вас теме — от фильмов до общих знаний
          </p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Отвечайте на вопросы</h3>
          <p>Текстовые, аудио и видео вопросы с разными форматами ответов</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Получайте результаты</h3>
          <p>
            Узнайте свой результат и сравните с друзьями или предыдущими
            попытками
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* How it works section */
.how-it-works-section {
  padding: 5rem 0;
  background-color: white;
}

.steps-container {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.step {
  flex: 1;
  text-align: center;
  position: relative;
}

.step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 2rem;
  right: -1rem;
  width: 2rem;
  height: 2px;
  background-color: #e2e8f0;
  @media (max-width: 768px) {
    display: none;
  }
}

.step-number {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.step h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-color);
}

.step p {
  color: #4a5568;
  font-size: 0.9375rem;
}

@media (max-width: 768px) {
  .steps-container {
    flex-direction: column;
    align-items: center;
  }
  .step:not(:last-child)::after {
    top: auto;
    right: auto;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 2rem;
  }
}
</style>
