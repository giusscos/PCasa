<script setup>
useHead({
    title: "Categorie prodotti - Pcasa",
    meta: [
        { name: 'description', content: "Scopri e acquista detersivi alla spina ecologici e prodotti tipici calabresi. Scopri e porta i sapori della calabria sulla tua tavola." },

        // Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pcasa.it/categorie' },
        { property: 'og:title', content: 'Categorie prodotti - Pcasa' },
        { property: 'og:description', content: "Scopri e acquista detersivi alla spina ecologici e prodotti tipici calabresi. Scopri e porta i sapori della calabria sulla tua tavola." },
        { property: 'og:image', content: 'https://pcasa.it/pcasa-social-meta.png' },

        // Twitter 
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://pcasa.it/categorie' },
        { property: 'twitter:title', content: 'Categorie prodotti - Pcasa' },
        { property: 'twitter:description', content: "Scopri e acquista detersivi alla spina ecologici e prodotti tipici calabresi. Scopri e porta i sapori della calabria sulla tua tavola." },
        { property: 'twitter:image', content: 'https://pcasa.it/pcasa-social-meta.png' }
    ]
})

const { fetchData } = useMySupabaseApi();

const categories = await fetchData('categories');
</script>

<template>
    <section>
        <div class="container mx-auto font-sans">
            <ButtonBack />

            <h1 class="title-standard leading-none mb-4 font-serif">
                Categorie
            </h1>

            <div v-if="categories || categories.length > 0"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <template v-for="(category, i) in categories" :key="i + '-category'">
                    <CardCategoriesInfo :element="category" />
                </template>
            </div>
            <div v-else-if="!categories || categories.length == 0">
                <p class="text-pcasa-text">Nessuna categoria disponibile</p>
            </div>
        </div>
    </section>
</template>