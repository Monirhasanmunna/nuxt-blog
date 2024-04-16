// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Dev Blog'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/preline.client.ts", "~/plugins/sweetalert2.js"],
})
