// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        // pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            htmlAttrs: {
                lang: "it",
            },
            title: 'Pcasa',
            meta: [
                { name: 'description', content: 'Una bellissima descrizione' }
            ],
            link: [
                { rel: 'icon', href: '/pcasa-icon.png' }
            ]
        }
    },
    modules: [
        '@nuxt/image-edge',
    ],
    image: {
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        },
        presets: {
            bodyImg: {
                modifiers: {
                    format: 'webp'
                }
            }
        }
    },
})