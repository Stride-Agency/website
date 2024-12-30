import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    runtimeConfig: {
        LINEAR_API_KEY: ""
    },
    modules: [
    'shadcn-nuxt',
      '@nuxtjs/tailwindcss',
      '@nuxt/content',
      '@nuxthq/studio',
      '@nuxtjs/i18n',
      '@vueuse/motion/nuxt',
      '@nuxt/image',
      'nuxt-svgo',
    ],
    content: {
        locales: ['en', 'de'],
        defaultLocale: 'en'
    },
    i18n: {
        strategy: 'prefix',
        defaultLocale: 'en',
        locales: [
            { code: 'en', file: 'en-US.json'},
            { code: 'de', file: 'de-DE.json'},
        ],
        // detectBrowserLanguage: {
        //     useCookie: true,
        //     cookieKey: 'i18n_redirected',
        //     redirectOn: 'root',
        //     alwaysRedirect: true,
        //     fallbackLocale: 'en'
        // }
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
    svgo: {
        autoImportPath: "assets/icons/",
        defaultImport: "component",
    },
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },
    imports: {
        dirs: ['types/**/*.ts']
    },
})
