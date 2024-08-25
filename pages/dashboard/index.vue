<script setup lang="ts">
const client = useSupabaseClient()

let { data: categories, error: errorCategories } = await client
    .from('categories')
    .select('*')
    .range(0, 2);

let { data: products, error: errorProducts } = await client
    .from('products')
    .select('*')
    .range(0, 2);

async function logout() {
    try {
        const { error } = await client.auth.signOut()

        if (error) throw (error)

        await navigateTo('/login')

    } catch (error) {
        console.log(error)
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
                        <NuxtLink to="/dashboard/create/category"
                            class="block px-4 py-1 border border-pcasa-accent hover:bg-pcasa-accent rounded-lg text-pcasa-text transition">
                            Aggiungi Categoria
                        </NuxtLink>
                        <NuxtLink to="/dashboard/categories"
                            class="text-pcasa-text/75 hover:text-pcasa-text transition">
                            Vedi tutte le categorie
                        </NuxtLink>
                    </div>
                </div>
                <div v-if="categories" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <template v-for="(category, i) in categories" :key="i + '-category'">
                        <CardCategories :category="category" />
                    </template>
                </div>
                <div v-if="!categories">
                    <p>Nessuna categoria</p>
                </div>
            </div>
            <div class="flex flex-col gap-6">
                <div class="flex justify-between items-center gap-4 flex-wrap">
                    <h3 class="text-3xl font-semibold mb-2">
                        Prodotti
                    </h3>
                    <div class="flex gap-4 flex-wrap items-center">
                        <NuxtLink to="/dashboard/create/product"
                            class="block px-4 py-1 border border-pcasa-accent hover:bg-pcasa-accent rounded-lg text-pcasa-text transition">
                            Aggiungi Prodotto
                        </NuxtLink>
                        <NuxtLink to="/dashboard/products"
                            class="text-pcasa-text/75 hover:text-pcasa-text transition">
                            Vedi tutti i prodotti
                        </NuxtLink>
                    </div>
                </div>
                <div v-if="products" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <template v-for="(product, i) in products" :key="i + '-product'">
                        <CardProducts :product="product" />
                    </template>
                </div>
                <div v-if="!products">
                    <p class="text-pcasa-text">Nessuna prodotto</p>
                </div>
            </div>
        </div>
        <button type="button" @click="logout()"
            class="font-semibold text-xl text-pcasa-error/75 hover:text-pcasa-error">
            Disconnettiti
        </button>
    </div>
</template>