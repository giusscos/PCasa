export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Prodotti per la cura della casa e dell\'ambiente - Pcasa',
    htmlAttrs: {
      lang: 'it'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Detersivi alla spina Ecologici per una migliore gestione della plastica; Artigianato e Prodotti Tipici Calabresi per farti vivere un esperienza unica.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/svg",
    "@nuxtjs/google-fonts",
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
  ],

  googleFonts: {
    families: {
      Lexend: {
        wght: [100, 300, 500, 700],
      },
    },
    display: 'swap',
  },

  image: {
    presets: {
      fullOptimize: {
        modifiers: {
          format: "webp",
          sizes: "xs:150px sm:300px md:500px lg:500px xl:600px xxl:100vw",
          quality: "1",
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  }
}
