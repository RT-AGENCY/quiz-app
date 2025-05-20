<template>
  <!-- Секция 3: Categories & Final CTA -->
  <section aria-labelledby="categories-heading" class="categories-section">
    <div class="container">
      <h2 id="categories-heading" class="section-title">
        Популярные категории квизов
      </h2>
      <div class="categories-grid">
        <article class="category-card">
          <div class="category-image">
            <Icon name="heroicons:film" class="category-icon" />
          </div>
          <h3>Фильмы и сериалы</h3>
          <p>
            Проверьте свои знания о кинематографе, актерах и знаменитых цитатах
          </p>
          <NuxtLink to="/quiz/movies" class="category-link"
            >Играть
            <Icon name="heroicons:arrow-right" class="icon-small" />
          </NuxtLink>
        </article>
        <article class="category-card">
          <div class="category-image">
            <Icon name="heroicons:book-open" class="category-icon" />
          </div>
          <h3>Литература</h3>
          <p>
            Викторины для книголюбов и знатоков классики и современных
            бестселлеров
          </p>
          <NuxtLink to="/quiz/books" class="category-link"
            >Играть
            <Icon name="heroicons:arrow-right" class="icon-small" />
          </NuxtLink>
        </article>
        <article class="category-card">
          <div class="category-image">
            <Icon name="heroicons:light-bulb" class="category-icon" />
          </div>
          <h3>Общие знания</h3>
          <p>Разнообразные вопросы на эрудицию, логику и кругозор для всех</p>
          <NuxtLink to="/quiz/general" class="category-link"
            >Играть
            <Icon name="heroicons:arrow-right" class="icon-small" />
          </NuxtLink>
        </article>
        <article class="category-card">
          <div class="category-image">
            <Icon name="heroicons:beaker" class="category-icon" />
          </div>
          <h3>Про алкоголь</h3>
          <p>
            Интересные факты и вопросы о напитках для вечеринок и посиделок с
            друзьями
          </p>
          <NuxtLink to="/quiz/drinks" class="category-link"
            >Играть
            <Icon name="heroicons:arrow-right" class="icon-small" />
          </NuxtLink>
        </article>
      </div>
      <div class="final-cta">
        <h2>Готовы проверить свои знания?</h2>
        <p>
          Присоединяйтесь к тысячам игроков и выбирайте из десятков
          захватывающих квизов для любой компании
        </p>
        <NuxtLink to="/quiz" class="cta-button secondary">
          Играть сейчас
          <Icon name="heroicons:play" class="icon" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Categories section */
.categories-section {
  padding: 5rem 0;
  background-color: #f7fafc;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.category-card {
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
  padding: 2rem;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: var(--accent-color);
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.category-icon {
  width: 2rem;
  height: 2rem;
  color: white;
}

.category-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-color);
}

.category-card p {
  color: #4a5568;
  font-size: 0.9375rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.category-link {
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.category-link:hover {
  color: var(--primary-dark);
}

.final-cta {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  color: white;
}

.final-cta h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.final-cta p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button.secondary {
  background-color: white;
  color: #6c5ce7;
  box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.1);
}

.cta-button.secondary:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(255, 255, 255, 0.2);
}
</style>
