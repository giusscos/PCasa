<script setup>
useHead({
    title: "Categorie prodotti - Pcasa",
    meta: [
        { name: 'description', content: "Scopri tutte le categorie di prodotti Pcasa. Dai detersivi, all'artigianato, dai prodotti per la casa ecologici ai prodotti tipici calabresi pronti per essere serviti sulla tua tavola." },

        // Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pcasa.it/categorie' },
        { property: 'og:title', content: 'Categorie prodotti - Pcasa' },
        { property: 'og:description', content: "Scopri tutte le categorie di prodotti Pcasa. Dai detersivi, all'artigianato, dai prodotti per la casa ecologici ai prodotti tipici calabresi pronti per essere serviti sulla tua tavola." },
        { property: 'og:image', content: 'https://pcasa.it/pcasa-social-meta.png' },

        // Twitter 
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://pcasa.it/categorie' },
        { property: 'twitter:title', content: 'Categorie prodotti - Pcasa' },
        { property: 'twitter:description', content: "Scopri tutte le categorie di prodotti Pcasa. Dai detersivi, all'artigianato, dai prodotti per la casa ecologici ai prodotti tipici calabresi pronti per essere serviti sulla tua tavola." },
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

            <h2 class="title-standard leading-none mb-4 font-serif">
                Categorie
            </h2>

            <div v-if="categories" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                <CardCategoryInfo :element="category" v-for="(category, i) in categories" :key="'category-' + i" />
            </div>
            <div v-else-if="!categories || categories.length == 0">
                <p class="text-pcasa-text">Nessuna categoria disponibile</p>
            </div>
        </div>
    </section>
</template>