<script>
export default {
    mame: 'ListMainProd',
    props: {
        prod: Object
    }
}
</script>
<template>
    <div class="relative rounded-lg overflow-hidden hover:scale-95 transition">
        <h3 class="absolute bottom-3 left-4 z-10 text-white text-xl sm:text-4xl font-semibold leading-none">
            {{ prod.title }}
        </h3>
        <div class="opacity-25 bg-black absolute inset-0 z-1"></div>
        <img class="block w-full h-full object-cover object-center" :src="`img/${prod.src}`" :alt="prod.altSrc">
        <!-- <nuxt-img preset="bodyImg" height="800" :src="prod.src" :alt="prod.altSrc" loading="lazy" /> -->
    </div>
</template>
<style>
@import '~/assets/css/main.css';
</style>