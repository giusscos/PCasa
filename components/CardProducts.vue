<script setup lang="ts">
const { deleteFn, deleteStorage } = useMySupabaseApi()

const BASE_STORAGE_URL = "https://eaayjammgfuuuqsxetie.supabase.co/storage/v1/object/public/images";

const props = defineProps(['element']);

const element = ref(props.element);

async function deleteProduct() {
    try {
        await deleteStorage('images', element.value.slug, element.value.image_url);
        
        await deleteFn('products', 'id', element.value.id);
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <div class="border border-pcasa-text/25 bg-pcasa-text/10 rounded-xl p-4 flex flex-col gap-2">
        <img class="object-contain object-center rounded-md aspect-square"
            :src="BASE_STORAGE_URL + '/' + element.slug + '/' + element.image_url[0]"
            :title="'Copertina prodotto ' + element.name" />
        <h4 class="font-semibold text-xl">{{ element.name }}</h4>
        <div class="flex gap-4 justify-end items-center">
            <NuxtLink :to="'/dashboard/edit/product/' + element.slug"
                class="px-4 py-1 border-2 border-pcasa-accent hover:bg-pcasa-accent hover:text-pcasa-text rounded-lg transition font-semibold">
                Modifica
            </NuxtLink>
            <button @click="deleteProduct"
                class="px-4 py-1 border-2 border-pcasa-error hover:bg-pcasa-error hover:text-pcasa-text rounded-lg transition font-semibold">
                Elimna
            </button>
        </div>
    </div>
</template>