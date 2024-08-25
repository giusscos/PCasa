<script setup>
const client = useSupabaseClient();

const { data } = await client
    .from('categories')
    .select('*');

</script>

<template>
    <section>
        <div class="container mx-auto font-sans">
            <ButtonBack />

            <div class="flex justify-between items-center gap-4 flex-wrap">
                <h1 class="title-standard leading-none mb-4 font-serif">
                    Categorie
                </h1>
                <NuxtLink to="/dashboard/create/category"
                    class="block px-4 py-1 border border-pcasa-accent hover:bg-pcasa-accent rounded-lg text-pcasa-text transition">
                    Aggiungi Categoria
                </NuxtLink>
            </div>

            <div v-if="data" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <template v-for="(element, i) in data" :key="i + '-category'">
                    <CardCategories :category="element" />
                </template>
            </div>
        </div>
    </section>
</template>