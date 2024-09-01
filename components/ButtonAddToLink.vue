<script setup>
const props = defineProps(['element']);

const element = props.element;
</script>
<template>
    <NuxtLink :to="element.link"
        class="block px-4 py-1 border border-pcasa-text hover:bg-pcasa-text rounded-lg text-pcasa-text hover:text-pcasa-bg font-semibold transition">
        {{ element.title }}
    </NuxtLink>
</template>