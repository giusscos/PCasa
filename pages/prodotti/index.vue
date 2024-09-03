<script setup>
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

const { fetchData } = useMySupabaseApi();

const products = await fetchData('products');
</script>

<template>
  <section>
    <div class="container mx-auto font-sans">
      <ButtonBack />

      <h2 class="title-standard leading-none mb-4 font-serif">
        Prodotti
      </h2>

      <div v-if="products || products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <template v-for="(product, i) in products" :key="i + '-product'">
          <CardProductsInfo :element="product" />
        </template>
      </div>
      <div v-else-if="!products || products.length == 0">
        <p class="text-pcasa-text">Nessun prodotto caricato</p>
      </div>
    </div>
  </section>
</template>