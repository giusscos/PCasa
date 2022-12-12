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
                { name: 'description', content: 'Riutiliziamo la plastica in modo intelligente evitando gli sprechi' },
                { name: 'author', content: 'Giuseppe Pio Cosenza - giusscos' },

                // Facebook
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://pcasatest.netlify.app' },
                { property: 'og:title', content: 'Pcasa' },
                { property: 'og:description', content: 'Riutiliziamo la plastica in modo intelligente evitando gli sprechi' },
                { property: 'og:image', content: 'https://pcasatest.netlify.app/pcasa-xmas-social-meta.png' },
                
                // Twitter 
                { property: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:url', content: 'https://pcasatest.netlify.app' },
                { property: 'twitter:title', content: 'Pcasa' },
                { property: 'twitter:description', content: 'Riutiliziamo la plastica in modo intelligente evitando gli sprechi' },
                { property: 'twitter:image', content: 'https://pcasatest.netlify.app/pcasa-xmas-social-meta.png' },
            ],
            link: [
                { rel: 'icon', href: '/pcasa-icon-xmas.png' }
            ]
        }
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
    //     presets: {
    //         bodyImg: {
    //             modifiers: {
    //                 format: 'webp',
    //                 quality: '80',
    //                 sizes: 'xs: 100vw, sm:320px, lg:512px, xl:640, xxl:768px'
    //             }
    //         }
    //     }
    // },
})