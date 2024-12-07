import { defineNuxtConfig } from 'nuxt/config'
import en from './locales/en-US.json';
import de from './locales/de-DE.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/content',
      '@nuxthq/studio',
      '@nuxtjs/i18n',
      '@vueuse/motion/nuxt',
      '@nuxt/image',
      'nuxt-svgo'
    ],
    content: {
        locales: ['de', 'en'],
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
    components: ['components',
        {
            path: '~/components/ui/sheet',
            pathPrefix: false,
        },
        {
            path: '~/components/ui/navigation-menu',
            pathPrefix: false,
        },
    ],
    imports: {
        dirs: ['types/**/*.ts']
    },
})
