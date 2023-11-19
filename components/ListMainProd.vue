<script>
export default {
    mame: 'ListMainProd',
    props: {
        prod: Object
    }
}
</script>
<template>
    <div
        class="relative rounded-lg overflow-hidden shadow-lg">
        <h3 class="absolute bottom-3 left-4 z-10 title-sm md:title-xs text-white font-semibold">
            {{ prod.title }}
        </h3>
        <img width="400" class="img-cover brightness-90 hover:scale-110 transition duration-300 ease-in-out" :src="`img/${prod.src}`" :alt="prod.altSrc" loading="lazy">
    </div>
</template>
<style>
@import '~/assets/css/main.css';
</style>