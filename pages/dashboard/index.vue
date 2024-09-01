<script setup lang="ts">
const { fetchDataWithLimit, logoutFn } = useMySupabaseApi()

const runtimeConfig = useRuntimeConfig()

const BASE_CREATE_URL = runtimeConfig.public.baseUrlCreate;

const categories = await fetchDataWithLimit('categories', 2);

const products = await fetchDataWithLimit('products', 2);

async function logout() {
    try {
        const data = await logoutFn();

        if (data) {
            navigateTo('/login');
        }
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <div class="container mx-auto px-5 font-sans">
        <div class="flex flex-col gap-8">

            <div class="flex flex-col gap-6">
                <div class="flex justify-between items-center gap-4 flex-wrap">
                    <h3 class="text-3xl font-semibold mb-2">
                        Categorie
                    </h3>
                    <div class="flex gap-4 flex-wrap items-center">
                        <ButtonAddToLink
                            :element="{ link: BASE_CREATE_URL + '/category', title: 'Aggiungi categoria' }" />
                        <NuxtLink to="/dashboard/categories"
                            class="text-pcasa-text/75 hover:text-pcasa-text transition flex gap-2 items-center">
                            Vedi tutti
                            <IconChevronRight />
                        </NuxtLink>
                    </div>
                </div>
                <div v-if="categories" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <template v-for="(category, i) in categories" :key="i + '-category'">
                        <CardCategories :element="category" />
                    </template>
                </div>
                <template v-if="!categories || categories.length == 0">
                    <p class="text-pcasa-text">Nessuna categoria caricata</p>
                </template>
            </div>

            <div class="flex flex-col gap-6">
                <div class="flex justify-between items-center gap-4 flex-wrap">
                    <h3 class="text-3xl font-semibold mb-2">
                        Prodotti
                    </h3>
                    <div class="flex gap-4 flex-wrap items-center">
                        <ButtonAddToLink
                            :element="{ link: BASE_CREATE_URL + '/product', title: 'Aggiungi prodotto' }" />
                        <NuxtLink to="/dashboard/products"
                            class="text-pcasa-text/75 hover:text-pcasa-text transition flex gap-2 items-center">
                            Vedi tutti
                            <IconChevronRight />
                        </NuxtLink>
                    </div>
                </div>
                <div v-if="products" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <template v-for="(product, i) in products" :key="i + '-product'">
                        <CardProducts :element="product" />
                    </template>
                </div>
                <template v-if="!products || products.length == 0">
                    <p class="text-pcasa-text">Nessuna prodotto caricato</p>
                </template>
            </div>
        </div>
        <button type="button" @click="logout()"
            class="font-semibold text-xl text-pcasa-error/75 hover:text-pcasa-error">
            Disconnettiti
        </button>
    </div>
</template>