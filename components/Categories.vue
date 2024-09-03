<script setup>
const { fetchDataWithLimit } = useMySupabaseApi();

const categories = await fetchDataWithLimit('categories', 2);
</script>
<template>
    <section class="section py-20">
        <div class="container mx-auto px-4 flex flex-col gap-y-4">
            <div class="flex gap-4 items-center">
                <h2 class="title-sm leading-none mr-auto">
                    Prodotti scelti per <span class="bg-pcasa-accent aspect-square pcasa-marker">te</span>
                </h2>
                <NuxtLink to="/categorie"
                    class="text-pcasa-text/75 hover:text-pcasa-text transition flex gap-2 items-center">
                    Vedi tutti
                    <IconChevronRight />
                </NuxtLink>
            </div>
            <div v-if="categories"
                class="grid grid-cols-1 max-w-[350px] mx-auto sm:mx-0 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                <CardCategoryInfo :element="category" v-for="(category, i) in categories" :key="'category-' + i" />
            </div>
        </div>
    </section>
</template>
<style>
@import '~/assets/css/main.css';
</style>