// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: "it",
            },
            title: 'Ecologia smart - Pcasa',
            meta: [
                { name: 'description', content: "Ecologia smart con detersivi alla spina e artigianato locale pensati per ridurre l'utilizzo della plastica. Prodotti tipici locali per portare sulle vostre tavole, i sapori della Calabria." },
                { name: 'author', content: 'Giuseppe Pio Cosenza - giusscos' },
                { name: 'theme-color', content: '#f0f0f0' },
                // Facebook
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://pcasa.it' },
                { property: 'og:title', content: 'Ecologia smart - Pcasa' },
                { property: 'og:description', content: "Ecologia smart con detersivi alla spina e artigianato locale pensati per ridurre l'utilizzo della plastica. Prodotti tipici locali per portare sulle vostre tavole, i sapori della Calabria." },
                { property: 'og:image', content: 'https://pcasa.it/pcasa-social-meta.png' },

                // Twitter 
                { property: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:url', content: 'https://pcasa.it' },
                { property: 'twitter:title', content: 'Ecologia smart - Pcasa' },
                { property: 'twitter:description', content: "Ecologia smart con detersivi alla spina e artigianato locale pensati per ridurre l'utilizzo della plastica. Prodotti tipici locali per portare sulle vostre tavole, i sapori della Calabria." },
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
    modules: [
        '@nuxt/image-edge',
    ],
})