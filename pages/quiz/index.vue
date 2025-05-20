<!-- pages/quiz/index.vue -->
<template>
  <div class="quiz-list-page">
    <!-- Banner section -->
    <section class="quiz-banner">
      <div class="container">
        <h1 class="page-title">Выберите квиз</h1>
        <p class="page-subtitle">
          Найдите интересный квиз по категории или воспользуйтесь поиском
        </p>
      </div>
    </section>

    <!-- Filter section -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-controls">
          <div class="search-wrapper">
            <Icon name="heroicons:magnifying-glass" class="search-icon" />
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Поиск квизов..."
              class="search-input"
              @input="filterQuizzes"
            />
            <button
              v-if="searchQuery"
              @click="clearSearch"
              class="clear-search"
            >
              <Icon name="heroicons:x-mark" />
            </button>
          </div>
          <div class="filter-dropdown">
            <select
              v-model="selectedCategory"
              @change="filterQuizzes"
              class="category-select"
            >
              <option value="">Все категории</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
            <Icon name="heroicons:chevron-down" class="select-icon" />
          </div>
          <div class="view-toggle">
            <button
              @click="viewMode = 'grid'"
              :class="['view-button', { active: viewMode === 'grid' }]"
              aria-label="Отображение сеткой"
            >
              <Icon name="heroicons:squares-2x2" />
            </button>
            <button
              @click="viewMode = 'list'"
              :class="['view-button', { active: viewMode === 'list' }]"
              aria-label="Отображение списком"
            >
              <Icon name="heroicons:bars-3" />
            </button>
          </div>
        </div>

        <!-- Category chips -->
        <div class="category-chips">
          <button
            @click="selectCategory('')"
            :class="['category-chip', { active: selectedCategory === '' }]"
          >
            Все
          </button>
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectCategory(category.id)"
            :class="[
              'category-chip',
              { active: selectedCategory === category.id },
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Quizzes grid -->
    <section class="quizzes-section">
      <div class="container">
        <!-- Results count -->
        <div class="results-count">
          <span>{{ filteredQuizzes.length }} {{ quizCountText }}</span>
          <span
            v-if="searchQuery || selectedCategory"
            class="reset-filters"
            @click="resetFilters"
          >
            Сбросить фильтры
            <Icon name="heroicons:arrow-path" class="reset-icon" />
          </span>
        </div>

        <!-- No results message -->
        <div v-if="filteredQuizzes.length === 0" class="no-results">
          <Icon name="heroicons:face-frown" class="no-results-icon" />
          <h3>Квизы не найдены</h3>
          <p>Попробуйте изменить параметры поиска или категорию</p>
          <button @click="resetFilters" class="reset-button">
            Сбросить фильтры
          </button>
        </div>

        <!-- Grid view -->
        <div v-else :class="['quizzes-container', `view-${viewMode}`]">
          <article
            v-for="quiz in filteredQuizzes"
            :key="quiz.id"
            class="quiz-card"
            :class="{ 'new-quiz': quiz.isNew, 'popular-quiz': quiz.isPopular }"
          >
            <!-- Featured badge -->
            <div v-if="quiz.isNew" class="quiz-badge new">Новинка</div>
            <div v-else-if="quiz.isPopular" class="quiz-badge popular">
              Популярный
            </div>

            <!-- Quiz card content -->
            <div class="quiz-image-wrapper">
              <div class="quiz-image">
                <Icon
                  :name="getCategoryIcon(quiz.category)"
                  class="category-icon"
                />
              </div>
              <div class="quiz-meta">
                <span class="quiz-questions"
                  >{{ quiz.questionCount }} вопросов</span
                >
                <span class="quiz-time">{{ quiz.timeMinutes }} мин</span>
              </div>
            </div>
            <div class="quiz-content">
              <div class="quiz-category">
                {{ getCategoryName(quiz.category) }}
              </div>
              <h2 class="quiz-title">{{ quiz.title }}</h2>
              <p class="quiz-description">{{ quiz.description }}</p>
              <div class="quiz-footer">
                <div class="quiz-stats">
                  <div class="stat">
                    <Icon name="heroicons:user-group" class="stat-icon" />
                    <span>{{ quiz.playCount }}+</span>
                  </div>
                  <div class="rating">
                    <Icon name="heroicons:star" class="star-icon" />
                    <span>{{ quiz.rating }}/5</span>
                  </div>
                </div>
                <NuxtLink :to="`/quiz/${quiz.id}`" class="play-button">
                  Играть
                  <Icon name="heroicons:play" class="play-icon" />
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Featured quiz -->
    <section class="featured-section">
      <div class="container">
        <div class="featured-quiz">
          <div class="featured-content">
            <span class="featured-label">Рекомендуем</span>
            <h2 class="featured-title">Музыкальный квиз с аудио вопросами</h2>
            <p class="featured-description">
              Проверьте свои знания музыки разных жанров и эпох. Слушайте
              отрывки и угадывайте исполнителей и названия песен!
            </p>
            <div class="featured-meta">
              <div class="meta-item">
                <Icon name="heroicons:musical-note" class="meta-icon" />
                <span>25 аудио вопросов</span>
              </div>
              <div class="meta-item">
                <Icon name="heroicons:clock" class="meta-icon" />
                <span>30 минут</span>
              </div>
              <div class="meta-item">
                <Icon name="heroicons:star" class="meta-icon" />
                <span>4.9/5 рейтинг</span>
              </div>
            </div>
            <NuxtLink to="/quiz/music-challenge" class="featured-button">
              Начать музыкальный квиз
              <Icon name="heroicons:play" class="button-icon" />
            </NuxtLink>
          </div>
          <div class="featured-image">
            <div class="image-placeholder">
              <Icon name="heroicons:musical-note" class="placeholder-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Состояние страницы
const searchQuery = ref('');
const selectedCategory = ref('');
const viewMode = ref('grid'); // 'grid' or 'list'

// Моковые данные категорий
const categories = ref([
  { id: 'movies', name: 'Фильмы и сериалы', icon: 'heroicons:film' },
  { id: 'books', name: 'Литература', icon: 'heroicons:book-open' },
  { id: 'general', name: 'Общие знания', icon: 'heroicons:light-bulb' },
  { id: 'drinks', name: 'Про алкоголь', icon: 'heroicons:beaker' },
  { id: 'music', name: 'Музыка', icon: 'heroicons:musical-note' },
  { id: 'history', name: 'История', icon: 'heroicons:academic-cap' },
]);

// Моковые данные квизов
const quizzes = ref([
  {
    id: 'movie-classics',
    title: 'Классика кинематографа',
    description:
      'Проверьте свои знания о культовых фильмах, режиссерах и знаменитых цитатах из кино.',
    category: 'movies',
    questionCount: 15,
    timeMinutes: 20,
    playCount: 1240,
    rating: 4.7,
    isNew: false,
    isPopular: true,
  },
  {
    id: 'series-quiz',
    title: 'Лучшие сериалы 2020-х',
    description:
      'Вопросы о самых популярных сериалах последних лет. От драм до комедий.',
    category: 'movies',
    questionCount: 20,
    timeMinutes: 25,
    playCount: 850,
    rating: 4.5,
    isNew: true,
    isPopular: false,
  },
  {
    id: 'literature-masters',
    title: 'Великие писатели мира',
    description:
      'От Достоевского до Хемингуэя - проверьте свои знания о величайших авторах и их произведениях.',
    category: 'books',
    questionCount: 18,
    timeMinutes: 22,
    playCount: 760,
    rating: 4.6,
    isNew: false,
    isPopular: false,
  },
  {
    id: 'general-knowledge',
    title: 'Эрудит: Общие знания',
    description:
      'Разнообразные вопросы по географии, науке, истории и культуре. Для настоящих эрудитов!',
    category: 'general',
    questionCount: 25,
    timeMinutes: 30,
    playCount: 1890,
    rating: 4.8,
    isNew: false,
    isPopular: true,
  },
  {
    id: 'cocktails-quiz',
    title: 'Коктейли мира',
    description:
      'Все о знаменитых коктейлях: состав, история происхождения и интересные факты.',
    category: 'drinks',
    questionCount: 12,
    timeMinutes: 15,
    playCount: 630,
    rating: 4.3,
    isNew: false,
    isPopular: false,
  },
  {
    id: 'wine-quiz',
    title: 'Винная энциклопедия',
    description:
      'Сорта винограда, регионы, выдержка и правила дегустации. Для ценителей вина!',
    category: 'drinks',
    questionCount: 15,
    timeMinutes: 18,
    playCount: 540,
    rating: 4.5,
    isNew: true,
    isPopular: false,
  },
  {
    id: 'rock-legends',
    title: 'Легенды рок-музыки',
    description:
      'От Elvis до Nirvana. История рок-музыки в вопросах о легендарных группах и исполнителях.',
    category: 'music',
    questionCount: 20,
    timeMinutes: 25,
    playCount: 920,
    rating: 4.7,
    isNew: false,
    isPopular: true,
  },
  {
    id: 'world-wars',
    title: 'Мировые войны',
    description:
      'Исторический квиз о Первой и Второй мировых войнах. Даты, личности, события.',
    category: 'history',
    questionCount: 22,
    timeMinutes: 28,
    playCount: 780,
    rating: 4.6,
    isNew: false,
    isPopular: false,
  },
]);

// Фильтрация квизов
const filteredQuizzes = computed(() => {
  return quizzes.value.filter((quiz) => {
    const matchesCategory =
      !selectedCategory.value || quiz.category === selectedCategory.value;
    const matchesSearch =
      !searchQuery.value ||
      quiz.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchQuery.value.toLowerCase());

    return matchesCategory && matchesSearch;
  });
});

// Текст с количеством квизов
const quizCountText = computed(() => {
  const count = filteredQuizzes.value.length;
  if (count === 1) return 'квиз найден';
  else if (count >= 2 && count <= 4) return 'квиза найдено';
  else return 'квизов найдено';
});

// Методы
const filterQuizzes = () => {
  // Фильтрация происходит автоматически через computed свойство
};

const clearSearch = () => {
  searchQuery.value = '';
  filterQuizzes();
};

const selectCategory = (categoryId) => {
  selectedCategory.value = categoryId;
  filterQuizzes();
};

const resetFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = '';
  filterQuizzes();
};

const getCategoryName = (categoryId) => {
  const category = categories.value.find((cat) => cat.id === categoryId);
  return category ? category.name : 'Другое';
};

const getCategoryIcon = (categoryId) => {
  const category = categories.value.find((cat) => cat.id === categoryId);
  return category ? category.icon : 'heroicons:question-mark-circle';
};

// SEO Metadata
useHead({
  title: 'Выбор квиза | Интеллектуальные онлайн-квизы',
  meta: [
    {
      name: 'description',
      content:
        'Выберите бесплатный квиз по интересующей вас категории: фильмы, книги, музыка, общие знания и многое другое. Игры для всех уровней эрудиции.',
    },
    {
      name: 'keywords',
      content:
        'выбрать квиз, бесплатные квизы онлайн, игра в квиз, категории викторин, тематические тесты, интеллектуальные игры',
    },
  ],
});
</script>

<style scoped>
/* General styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Quiz banner */
.quiz-banner {
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
}

/* Filter section */
.filter-section {
  background-color: white;
  padding: 1.5rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.filter-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.search-wrapper {
  flex: 1;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: #94a3b8;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.clear-search {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-search:hover {
  color: #64748b;
}

.filter-dropdown {
  position: relative;
}

.category-select {
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  appearance: none;
  min-width: 200px;
}

.select-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  color: #64748b;
  pointer-events: none;
}

.view-toggle {
  display: flex;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  overflow: hidden;
}

.view-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #64748b;
  transition: background-color 0.2s;
}

.view-button:hover {
  background-color: #f1f5f9;
}

.view-button.active {
  background-color: #e2e8f0;
  color: #1e293b;
}

.category-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.category-chip {
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background-color: #f1f5f9;
  border: none;
  font-size: 0.875rem;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}

.category-chip:hover {
  background-color: #e2e8f0;
  color: #1e293b;
}

.category-chip.active {
  background-color: var(--primary-color);
  color: white;
}

/* Quizzes section */
.quizzes-section {
  padding: 3rem 0;
  background-color: #f8fafc;
  min-height: 500px;
}

.results-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  color: #64748b;
  font-size: 0.9375rem;
}

.reset-filters {
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  cursor: pointer;
}

.reset-icon {
  width: 1rem;
  height: 1rem;
  margin-left: 0.25rem;
}

.no-results {
  text-align: center;
  padding: 4rem 0;
  color: #64748b;
}

.no-results-icon {
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  color: #94a3b8;
}

.no-results h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #334155;
}

.no-results p {
  margin-bottom: 1.5rem;
}

.reset-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.reset-button:hover {
  background-color: var(--primary-dark);
}

/* Quizzes grid/list layout */
.quizzes-container {
  display: grid;
  gap: 2rem;
}

.view-grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.view-list {
  grid-template-columns: 1fr;
}

.quiz-card {
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
}

.view-list .quiz-card {
  flex-direction: row;
}

.quiz-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.quiz-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 1;
}

.quiz-badge.new {
  background-color: #10b981;
  color: white;
}

.quiz-badge.popular {
  background-color: #f59e0b;
  color: white;
}

.quiz-image-wrapper {
  position: relative;
}

.view-grid .quiz-image-wrapper {
  height: 150px;
}

.view-list .quiz-image-wrapper {
  width: 200px;
  height: auto;
}

.quiz-image {
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-icon {
  width: 3rem;
  height: 3rem;
  color: white;
  opacity: 0.8;
}

.quiz-meta {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 0.75rem;
}

.quiz-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.quiz-category {
  color: var(--primary-color);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.quiz-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #1e293b;
}

.quiz-description {
  color: #64748b;
  font-size: 0.9375rem;
  margin-bottom: 1.5rem;
  flex: 1;
}

.quiz-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quiz-stats {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat,
.rating {
  display: flex;
  align-items: center;
  color: #64748b;
  font-size: 0.875rem;
}

.stat-icon,
.star-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
}

.star-icon {
  color: #f59e0b;
}

.play-button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s;
}

.play-button:hover {
  background-color: var(--primary-dark);
}

.play-icon {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
}

/* Featured section */
.featured-section {
  padding: 4rem 0;
  background-color: white;
}

.featured-quiz {
  display: flex;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  border-radius: 1rem;
  overflow: hidden;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.featured-content {
  flex: 1;
  padding: 3rem;
}

.featured-label {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.featured-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.featured-description {
  font-size: 1.125rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 600px;
}

.featured-meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.meta-item {
  display: flex;
  align-items: center;
}

.meta-icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
}

.featured-button {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  color: #4f46e5;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.featured-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
}

.button-icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.5rem;
}

.featured-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-icon {
  width: 6rem;
  height: 6rem;
  opacity: 0.8;
}

/* Responsive styles */
@media (max-width: 768px) {
  .filter-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .category-select {
    width: 100%;
    min-width: auto;
  }

  .featured-quiz {
    flex-direction: column;
  }

  .featured-image {
    height: 200px;
  }

  .view-list .quiz-card {
    flex-direction: column;
  }

  .view-list .quiz-image-wrapper {
    width: 100%;
    height: 150px;
  }

  .featured-meta {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 576px) {
  .view-grid {
    grid-template-columns: 1fr;
  }

  .quiz-banner {
    padding: 3rem 0;
  }

  .page-title {
    font-size: 2rem;
  }

  .featured-content {
    padding: 2rem;
  }

  .featured-title {
    font-size: 1.5rem;
  }
}
</style>
