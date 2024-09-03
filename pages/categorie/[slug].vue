<script setup>
const route = useRoute();

const { fetchDataId } = useMySupabaseApi();

const category = await fetchDataId('categories', 'slug', route.params.slug, '*, products(*)');

const products = category.products;

useHead({
    title: category.name + " - Pcasa",
    meta: [
        { name: 'description', content: category.description },

        // Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pcasa.it/categorie/' + route.params.slug },
        { property: 'og:title', content: category.name + " - Pcasa" },
        { property: 'og:description', content: category.description },
        { property: 'og:image', content: 'https://pcasa.it/pcasa-social-meta.png' },

        // Twitter 
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://pcasa.it/categorie/' + route.params.slug },
        { property: 'twitter:title', content: category.name + " - Pcasa" },
        { property: 'twitter:description', content: category.description },
        { property: 'twitter:image', content: 'https://pcasa.it/pcasa-social-meta.png' }
    ]
});
</script>
<template>
    <section>
        <div v-if="category" class="container mx-auto font-sans">
            <ButtonBack />

            <h2 class="title-standard leading-none mb-4 font-serif">
                {{ category.name }}
            </h2>

            <div v-if="products || products.length > 0"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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