<template>
  <!-- Секция 2: Features Section -->
  <section aria-labelledby="features-heading" class="features-section">
    <div class="container">
      <h2 id="features-heading" class="section-title">
        Почему наши квизы особенные
      </h2>
      <div class="features-grid">
        <article class="feature-card">
          <div class="feature-icon">
            <Icon name="heroicons:document-text" class="feature-icon-svg" />
          </div>
          <h3>Текстовые квизы</h3>
          <p>
            Классические вопросы и ответы для проверки эрудиции и знаний с
            разными уровнями сложности
          </p>
        </article>
        <article class="feature-card">
          <div class="feature-icon">
            <Icon name="heroicons:photo" class="feature-icon-svg" />
          </div>
          <h3>Мультимедийный контент</h3>
          <p>
            Уникальные квизы с фото, видео и аудио вопросами для разностороннего
            опыта
          </p>
        </article>
        <article class="feature-card">
          <div class="feature-icon">
            <Icon name="heroicons:microphone" class="feature-icon-svg" />
          </div>
          <h3>AI-ведущий</h3>
          <p>
            Виртуальный ведущий, который озвучивает вопросы и создает атмосферу
            настоящей интеллектуальной игры
          </p>
        </article>
      </div>
      <div class="mockup-container">
        <div class="mockup-screen">
          <div class="mockup-quiz">
            <div class="mockup-question">
              <span class="mockup-counter">Вопрос 3/10</span>
              <h4>Какой фильм получил Оскар как лучший фильм в 2020 году?</h4>
              <div class="mockup-options">
                <div class="mockup-option">1917</div>
                <div class="mockup-option">Джокер</div>
                <div class="mockup-option selected">Паразиты</div>
                <div class="mockup-option">Однажды в... Голливуде</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Features section */
.features-section {
  padding: 5rem 0;
  background-color: white;
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  padding: 2rem;
  border-radius: 0.75rem;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: rgba(52, 152, 219, 0.1);
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.feature-icon-svg {
  width: 2rem;
  height: 2rem;
  color: var(--primary-color);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
}

.mockup-container {
  max-width: 700px;
  margin: 0 auto;
}

.mockup-screen {
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.mockup-quiz {
  padding: 2rem;
}

.mockup-counter {
  display: inline-block;
  background-color: #f7fafc;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  color: #4a5568;
  margin-bottom: 1rem;
}

.mockup-question h4 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.mockup-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.mockup-option {
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mockup-option:hover {
  border-color: var(--primary-color);
  background-color: rgba(52, 152, 219, 0.05);
}

.mockup-option.selected {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

@media (max-width: 768px) {
  .mockup-options {
    grid-template-columns: 1fr;
  }
}
</style>
