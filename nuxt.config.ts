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
    }
})