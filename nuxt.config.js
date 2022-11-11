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
      { hid: 'description', name: 'description', content: 'Prodotti per la casa di qualità e nel rispetto dell\'ambiente' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
        rel:'apple-touch-icon', sizes: '180x180', href: 'https://pcasatest.netlify.app/favicon.ico',
      }
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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-social-meta",
      {
        url: "https://pcasatest.netlify.app",
        title: "Prodotti per la casa - Pcasa",
        site_name: "Pcasa",
        description: "Prodotti per la casa di qualità e nel rispetto dell\'ambiente",
        img: "https://pcasatest.netlify.app/images/pcasa-social-meta.webp",
        img_size: { width: "1200px", height: "675px" },
        locale: "it_IT",
        twitter: "",
        twitter_card: "summary_large_image",
        theme_color: "#ffffff",
      },

    ]
  ],

  googleFonts: {
    families: {
      Lexend: {
        wght: [300, 500, 700],
      },
    },
    display: 'swap',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  }
}
