<template>
  <section aria-labelledby="hero-heading" class="hero-section">
    <div class="container">
      <div class="hero-content">
        <h1 id="hero-heading" class="hero-title">
          Интеллектуальные онлайн-квизы с медиа-контентом
        </h1>
        <p class="hero-subtitle">
          Проверьте свои знания в увлекательных викторинах с текстом, видео и
          AI-ведущим
        </p>
        <NuxtLink to="/quiz" class="cta-button primary">
          Выбрать квиз
          <Icon name="heroicons:arrow-right" class="icon" />
        </NuxtLink>
      </div>
      <div class="hero-image">
        <!-- Placeholder для основного изображения -->
        <div class="hero-image-placeholder">
          <Icon name="heroicons:academic-cap" class="hero-icon" />
          <div class="hero-devices">
            <div class="device device-mobile">
              <div class="device-screen">
                <div class="device-content">Q</div>
              </div>
            </div>
            <div class="device device-tablet">
              <div class="device-screen">
                <div class="device-content">?</div>
              </div>
            </div>
            <div class="device device-laptop">
              <div class="device-screen">
                <div class="device-content">!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hero section */
.hero-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
  overflow: hidden;
}

.hero-section .container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.2;
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.5;
  color: #4a5568;
  margin-bottom: 2rem;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-placeholder {
  position: relative;
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hero-icon {
  width: 5rem;
  height: 5rem;
  color: var(--primary-color);
}

.hero-devices {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.device {
  position: relative;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.device-mobile {
  width: 80px;
  height: 160px;
  transform: rotate(-15deg) translateY(40px);
}

.device-tablet {
  width: 180px;
  height: 240px;
  z-index: 2;
}

.device-laptop {
  width: 240px;
  height: 160px;
  transform: rotate(15deg) translateY(40px);
}

.device-screen {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  background: var(--light-bg);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.device-content {
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
}

.cta-button.primary {
  background-color: var(--primary-color);
  color: white;
  box-shadow: 0 4px 6px -1px rgba(52, 152, 219, 0.4);
}

.cta-button.primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(52, 152, 219, 0.3);
}

@media (max-width: 768px) {
  .hero-section .container {
    flex-direction: column;
  }
  .hero-section {
    padding: 4rem 0;
  }

  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .hero-image {
    width: 100%;
  }
}
</style>
