<script>
export default {
  setup() {
    useHead({
      title: "Negozio online - Pcasa",
      meta: [
        { name: 'description', content: "" },
        { name: 'robots', content: 'noindex' },
        // Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pcasa.it/prodotti' },
        { property: 'og:title', content: 'Negozio online - Pcasa' },
        { property: 'og:description', content: "" },
        { property: 'og:image', content: 'https://pcasa.it/pcasa-social-meta.png' },

        // Twitter 
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://pcasa.it/prodotti' },
        { property: 'twitter:title', content: 'Negozio online - Pcasa' },
        { property: 'twitter:description', content: "" },
        { property: 'twitter:image', content: 'https://pcasa.it/pcasa-social-meta.png' }
      ]
    })
  }
}
</script>
<template>
  <main class="products">
    <ComingSoon />
  </main>
</template>