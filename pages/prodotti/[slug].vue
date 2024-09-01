<script setup>
const route = useRoute();

const { fetchDataId } = useMySupabaseApi();

const product = await fetchDataId('products', 'slug', route.params.slug, '*, categories(*)');

const BASE_STORAGE_URL = "https://eaayjammgfuuuqsxetie.supabase.co/storage/v1/object/public/images";
</script>
<template>
    <section>
        <div v-if="product" class="container mx-auto font-sans">
            <ButtonBack />

            <div class="py-5 grid grid-cols-2 gap-6">
                <div class="w-full h-full grid grid-cols-2 gap-6 overflow-hidden">
                    <template v-for="(image, i) in product.image_url" :key="'template-image-' + i">
                        <img :src="BASE_STORAGE_URL + '/' + product.id + '/' + image"
                            :title="'Immagine ' + product.name + ' ' + i"
                            class="object-center object-cover h-full w-full rounded-lg"
                            :class="(i == 0 || i == 3) && 'col-span-2'" />
                    </template>
                </div>
                <div class="w-full h-full">
                    <h1 class="title-sm leading-none mb-6 font-serif">
                        {{ product.name }}
                    </h1>
                    <p class="paragraph-sm mb-4">{{ product.description }}</p>
                    <span class="block font-semibold text-2xl mb-2">&euro; {{ product.amount }}</span>
                    <span class="block mb-2"
                        :class="product.quantity > 10 ? 'text-pcasa-accent-alt' : 'text-pcasa-error'">
                        {{ product.quantity > 10 ? 'Più di 10 rimasti' : 'Meno di 10 rimasti!' }}</span>
                    <button
                        class="px-4 w-full py-1 border-2 border-pcasa-text hover:bg-pcasa-text hover:text-pcasa-bg rounded-lg transition font-semibold">
                        Aggiungi al carrello
                    </button>
                </div>
            </div>

        </div>
        <div v-else-if="!product" class="container mx-auto font-sans">
            <ButtonBack />

            <span class="title-standard leading-none mb-4 font-serif">
                Nessun prodotto trovato :(
            </span>
        </div>
    </section>
</template>