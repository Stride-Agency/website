// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/strapi'],
  routeRules: {
    '/': { prerender: true }
  },
  tailwindcss: {
    configPath: './tailwind.config.ts'
  },
  postcss: {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
  },
})