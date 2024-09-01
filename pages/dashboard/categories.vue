<script setup>
const { fetchData } = useMySupabaseApi()

const runtimeConfig = useRuntimeConfig()

const BASE_CREATE_URL = runtimeConfig.public.baseUrlCreate;

const categories = await fetchData('categories');
</script>

<template>
    <section>
        <div class="container mx-auto font-sans">
            <ButtonBack />

            <div class="flex justify-between items-center gap-4 flex-wrap">
                <h1 class="title-standard leading-none mb-4 font-serif">
                    Categorie
                </h1>
                <ButtonAddToLink :element="{ link: BASE_CREATE_URL + '/category', title: 'Aggiungi categoria' }" />
            </div>

            <div v-if="categories" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <template v-for="(category, i) in categories" :key="i + '-category'">
                    <CardCategories :element="category" />
                </template>
            </div>
            <div v-else-if="!categories || categories.length == 0">
                <p class="text-pcasa-text">Nessuna categoria caricata</p>
            </div>
        </div>
    </section>
</template>