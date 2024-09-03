<script setup>
const props = defineProps(['element']);

const element = ref(props.element);

const BASE_STORAGE_URL = "https://eaayjammgfuuuqsxetie.supabase.co/storage/v1/object/public/images";
</script>
<template>
    <div class="relative rounded-lg overflow-hidden border border-pcasa-text/25 hover:scale-95 transition">
        <NuxtLink :to="'/categorie/' + element.slug" class="absolute inset-0 z-10">
            <span class="sr-only">Visualizza i prodotti: {{ element.name }}</span>
        </NuxtLink>
        <h3 class="absolute bottom-3 left-4 z-10 title-sm md:title-xs text-white font-semibold">
            {{ element.name }}
        </h3>
        <img width="400" class="img-cover" :src="BASE_STORAGE_URL + '/' + element.slug + '/' + element.image_url[0]"
            :alt="'Immagine categoria ' + element.name" loading="lazy">
    </div>
</template>
<style>
@import '~/assets/css/main.css';
</style>