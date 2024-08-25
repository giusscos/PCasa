<script setup>
const route = useRouter();
</script>

<template>
    <button type="button" @click="route.back()"
        class="mb-2 text-pcasa-text/75 hover:text-pcasa-text flex items-center gap-2 flex-nowrap">
        <IconChevronRight class="rotate-180" /><span class="whitespace-nowrap">Torna indietro</span>
    </button>
</template>