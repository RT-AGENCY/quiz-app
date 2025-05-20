// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
  ],

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_ANON_KEY,
    },
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY,
    // Вместо несуществующего `middleware` используем redirectOptions
    redirectOptions: {
      // Куда кидает, если нет сессии
      login: '/login',
      // Куда после колбэка поставит
      callback: '/',

      // Массив путей, **ИСКЛЮЧЁННЫХ** из проверки
      // то есть на них не будет редиректа
      exclude: [
        '/', // главная
        '/about', // ещё какой-нибудь публичный роут
        '/login', // само-собой, чтобы форма логина работала
        '/quiz'
      ],

      // Опционально: отключить cookie-редирект (необязательно)
      cookieRedirect: false,
    },
  },
});
