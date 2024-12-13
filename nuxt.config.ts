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
    // components: ['components'],
        // {
        //     path: '~/components/ui/sheet',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/navigation-menu',
        //     pathPrefix: false,

        // },
        // {
        //     path: '~/components/ui/dialog',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/auto-form',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/button',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/calendar',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/checkbox',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/form',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/input',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/label',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/popover',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/radio-group',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/select',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/seperator',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/switch',
        //     pathPrefix: false,
        // },
        // {
        //     path: '~/components/ui/textarea',
        //     pathPrefix: false,
        // },
    // ],
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
