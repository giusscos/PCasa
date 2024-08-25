<script setup>
const props = defineProps(['category']);

const element = ref(props.category);
</script>

<template>
    <div class="border border-pcasa-text/25 bg-pcasa-text/10 rounded-xl p-4 flex flex-col gap-4">
        <h4 class="font-semibold text-xl">{{ element.name }}</h4>
        <p class="grow truncate">{{ element.description }}</p>
        <div class="flex gap-4 justify-end items-center">
            <NuxtLink :to="'/dashboard/edit/category/' + element.id"
                class="px-4 py-1 border-2 border-pcasa-accent hover:bg-pcasa-accent hover:text-pcasa-text rounded-lg transition font-semibold">
                Modifica
            </NuxtLink>
            <button type="button"
                class="px-4 py-1 border-2 border-pcasa-error hover:bg-pcasa-error hover:text-pcasa-text rounded-lg transition font-semibold">
                Elimina
            </button>
        </div>
    </div>
</template>