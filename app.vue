<template>
  <div class="app">
    <!-- Общий header для всего приложения -->
    <header class="header">
      <nav class="nav-container">
        <NuxtLink to="/" class="logo">Quiz App</NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/quiz" class="nav-link">Квизы</NuxtLink>
          <NuxtLink to="/profile" class="nav-link">Профиль</NuxtLink>
          <!-- Кнопка логина/регистрации или имя пользователя -->
          <NuxtLink to="/login" class="nav-link login-button">Войти</NuxtLink>
        </div>
      </nav>
    </header>

    <!-- Основной контент -->
    <main class="main-content">
      <!-- NuxtPage отображает текущую страницу из директории pages -->
      <NuxtPage />
    </main>

    <!-- Общий footer для всего приложения -->
    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} Quiz App. Все права защищены.</p>
    </footer>

    <!-- Сохраняем NuxtRouteAnnouncer для доступности -->
    <NuxtRouteAnnouncer />
  </div>
</template>

<style>
/* Базовые стили */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  color: #2c3e50;
  background-color: #f5f7fa;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #3498db;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #3498db;
}

.login-button {
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
}

.login-button:hover {
  background-color: #2980b9;
  color: white;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: auto;
}

/* Переменные цветовой схемы */
:root {
  --primary-color: #3498db;
  --primary-dark: #2980b9;
  --accent-color: #f39c12;
  --accent-dark: #e67e22;
  --text-color: #2c3e50;
  --light-bg: #f5f7fa;
  --success-color: #2ecc71;
  --error-color: #e74c3c;
}
</style>
