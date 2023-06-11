// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: "it",
            },
            title: 'Pcasa',
            meta: [
                { name: 'description', content: 'Riutiliziamo la plastica in modo intelligente evitando gli sprechi' },
                { name: 'author', content: 'Giuseppe Pio Cosenza - giusscos' },
                { name: 'theme-color', content: '#f0f0f0' },
                // Facebook
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://pcasa.it' },
                { property: 'og:title', content: 'Pcasa' },
                { property: 'og:description', content: 'Riutiliziamo la plastica in modo intelligente evitando gli sprechi' },
                { property: 'og:image', content: 'https://pcasa.it/pcasa-social-meta.png' },

                // Twitter 
                { property: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:url', content: 'https://pcasa.it' },
                { property: 'twitter:title', content: 'Pcasa' },
                { property: 'twitter:description', content: 'Riutiliziamo la plastica in modo intelligente evitando gli sprechi' },
                { property: 'twitter:image', content: 'https://pcasa.it/pcasa-social-meta.png' },
            ],
            link: [
                { rel: 'icon', href: '/pcasa-icon.png' }
            ]
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    // modules: [
    //     '@nuxt/image-edge',
    // ],
    // image: {
    //     dir: 'public/img',
    //     screens: {
    //         xs: 320,
    //         sm: 640,
    //         md: 768,
    //         lg: 1024,
    //         xl: 1280,
    //         xxl: 1536,
    //         '2xl': 1536
    //     },
    // },
})