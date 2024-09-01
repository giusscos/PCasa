<script setup>
const { fetchData } = useMySupabaseApi()

const runtimeConfig = useRuntimeConfig()

const BASE_CREATE_URL = runtimeConfig.public.baseUrlCreate;

const products = await fetchData('products');
</script>

<template>
    <section>
        <div class="container mx-auto font-sans">
            <ButtonBack />

            <div class="flex justify-between items-center gap-4 flex-wrap">
                <h1 class="title-standard leading-none mb-4 font-serif">
                    Prodotti
                </h1>
                <ButtonAddToLink :element="{ link: BASE_CREATE_URL + '/product', title: 'Aggiungi prodotto' }" />
            </div>

            <div v-if="products" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <template v-for="(product, i) in products" :key="i + '-product'">
                    <CardProducts :element="product" />
                </template>
            </div>
            <div v-else-if="!products || products.length == 0">
                <p class="text-pcasa-text">Nessun prodotto caricato</p>
            </div>
        </div>
    </section>
</template>