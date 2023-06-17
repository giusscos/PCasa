<script>
export default {
  setup() {
    useHead({
      title: "Prodotti ecologici e prodotti tipici calabresi - Pcasa",
      meta: [
        { name: 'description', content: "Scopri e acquista detersivi alla spina ecologici e prodotti tipici calabresi. Scopri e porta i sapori della calabria sulla tua tavola." },

        // Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pcasa.it/prodotti' },
        { property: 'og:title', content: 'Prodotti ecologici e prodotti tipici calabresi - Pcasa' },
        { property: 'og:description', content: "Scopri e acquista detersivi alla spina ecologici e prodotti tipici calabresi. Scopri e porta i sapori della calabria sulla tua tavola." },
        { property: 'og:image', content: 'https://pcasa.it/pcasa-social-meta.png' },

        // Twitter 
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://pcasa.it/prodotti' },
        { property: 'twitter:title', content: 'Prodotti ecologici e prodotti tipici calabresi - Pcasa' },
        { property: 'twitter:description', content: "Scopri e acquista detersivi alla spina ecologici e prodotti tipici calabresi. Scopri e porta i sapori della calabria sulla tua tavola." },
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