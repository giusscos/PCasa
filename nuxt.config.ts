// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "it",
      },
      title:
        "Pcasa | artigianato e prodotti per la casa",
      meta: [
        {
          name: "description",
          content:
            "Scegli tra numerosi prodotti per l'arredamento della tua casa. Rendi la tua casa più sostenibile e confortevole con i prodotti Pcasa!",
        },
        { name: "author", content: "Giuseppe Pio Cosenza - giusscos" },
        { name: "theme-color", content: "#f0f0f0" },
        // Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://pcasa.it" },
        {
          property: "og:title",
          content:
            "Pcasa | artigianato e prodotti per la casa",
        },
        {
          property: "og:description",
          content:
            "Scegli tra numerosi prodotti per l'arredamento della tua casa. Rendi la tua casa più sostenibile e confortevole con i prodotti Pcasa!",
        },
        {
          property: "og:image",
          content: "https://pcasa.it/pcasa-social-meta.png",
        },

        // Twitter
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://pcasa.it" },
        {
          property: "twitter:title",
          content:
            "Pcasa | artigianato e prodotti per la casa",
        },
        {
          property: "twitter:description",
          content:
            "Scegli tra numerosi prodotti per l'arredamento della tua casa. Rendi la tua casa più sostenibile e confortevole con i prodotti Pcasa!",
        },
        {
          property: "twitter:image",
          content: "https://pcasa.it/pcasa-social-meta.png",
        },
      ],
      link: [{ rel: "icon", href: "/pcasa-icon.png" }],
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-01-07",
});