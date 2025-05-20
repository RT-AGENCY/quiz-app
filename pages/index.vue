<template>
  <div>
    <HeroHome />
    <FeaturesHome />
    <CategoriesHome />
    <HowWorksHome />
  </div>
</template>

<script setup>
import HeroHome from '@/components/pages/home/HeroHome.vue';
import FeaturesHome from '~/components/pages/home/FeaturesHome.vue';
import CategoriesHome from '~/components/pages/home/CategoriesHome.vue';
import HowWorksHome from '~/components/pages/home/HowWorksHome.vue';

// Метаданные страницы для SEO
useHead({
  title: 'Интеллектуальные онлайн-квизы с медиа-контентом и AI-ведущим',
  meta: [
    {
      name: 'description',
      content:
        'Бесплатные онлайн-квизы с разными типами вопросов: текстовые, фото, видео и аудио. Проверьте свои знания в категориях фильмы, книги, общие знания и многое другое.',
    },
    {
      name: 'keywords',
      content:
        'квиз, бесплатный квиз, играть квиз, интеллектуальные игры онлайн, викторины с мультимедиа, квизы на эрудицию, тесты для вечеринок, викторины про фильмы, квизы с голосовым сопровождением',
    },
  ],
});
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  text-align: center;
  font-size: 2.25rem;
  color: var(--text-color);
  margin-bottom: 2.5rem;
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.5rem;
}

.icon-small {
  width: 1rem;
  height: 1rem;
  margin-left: 0.25rem;
}
.cta-button {
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 1.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  transition: all 0.3s ease;
}
</style>
