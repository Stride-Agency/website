import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from "node:path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // ssr must be true because of Nuxt Studio
    ssr: true,
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/content',
      '@nuxthq/studio',
      '@nuxtjs/i18n',
      '@vueuse/motion/nuxt',
      '@nuxt/image'
    ],
    i18n: {
        strategy: 'prefix',
        locales: ["de", "en"],
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
            alwaysRedirect: true,
            fallbackLocale: 'en'
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: true,
    },
    components: ['components', 'content/components']
})
