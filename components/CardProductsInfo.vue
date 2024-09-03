<script setup>
const BASE_STORAGE_URL = "https://eaayjammgfuuuqsxetie.supabase.co/storage/v1/object/public/images";

const props = defineProps(['element']);

const element = ref(props.element);
</script>

<template>
    <div
        class="relative rounded-xl p-4 flex flex-col gap-2 border border-pcasa-text/25 shadow-lg hover:shadow-md shadow-pcasa-text/10 hover:scale-95 transition">
        <NuxtLink :to="'/prodotti/' + element.slug" class="absolute inset-0">
            <span class="sr-only">Vai alla pagina {{ element.name }}</span>
        </NuxtLink>
        <img class="object-contain object-center rounded-md aspect-square"
            :src="BASE_STORAGE_URL + '/' + element.slug + '/' + element.image_url[0]"
            :title="'Copertina prodotto ' + element.name" />
        <h4 class="font-semibold text-xl leading-none">{{ element.name }}</h4>
        <div class="flex items-center gap-2 flex-wrap">
            <p class="mr-auto">&euro; {{ element.amount }}</p>
        </div>
    </div>
</template>