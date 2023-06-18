// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: "it",
            },
            title: 'Ecologia in modo semplice, prodotti tipici e artigianato locale - Pcasa',
            meta: [
                { name: 'description', content: "Ecologia smart con detersivi alla spina e artigianato locale pensati per ridurre l'utilizzo della plastica. Prodotti tipici locali per portare sulle vostre tavole i sapori della Calabria." },
                { name: 'author', content: 'Giuseppe Pio Cosenza - giusscos' },
                { name: 'theme-color', content: '#f0f0f0' },
                // Facebook
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://pcasa.it' },
                { property: 'og:title', content: 'Ecologia in modo semplice, prodotti tipici e artigianato locale - Pcasa' },
                { property: 'og:description', content: "Ecologia smart con detersivi alla spina e artigianato locale pensati per ridurre l'utilizzo della plastica. Prodotti tipici locali per portare sulle vostre tavole i sapori della Calabria." },
                { property: 'og:image', content: 'https://pcasa.it/pcasa-social-meta.png' },

                // Twitter 
                { property: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:url', content: 'https://pcasa.it' },
                { property: 'twitter:title', content: 'Ecologia in modo semplice, prodotti tipici e artigianato locale - Pcasa' },
                { property: 'twitter:description', content: "Ecologia smart con detersivi alla spina e artigianato locale pensati per ridurre l'utilizzo della plastica. Prodotti tipici locali per portare sulle vostre tavole i sapori della Calabria." },
                { property: 'twitter:image', content: 'https://pcasa.it/pcasa-social-meta.png' },
            ],
            link: [
                { rel: 'icon', href: '/pcasa-icon.png' }
            ]
        }
    },
    css: ['~/assets/css/main.css'],
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://pcasa.it',
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    image: {
        // The screen sizes predefined by `@nuxt/image`:
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
            landingVertical: {
                modifiers: {
                    format: 'webp',
                }
            }
        }
    },
    modules: [
        '@nuxt/image',
        'nuxt-simple-sitemap',
    ],
})