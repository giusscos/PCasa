<script>
export default {
    mame: 'ListMainProd',
    props: {
        prod: Object
    }
}
</script>
<template>
    <div class="relative min-w-[300px] md:min-w-[450px] lg:min-w-[550px] rounded-lg overflow-hidden md:hover:scale-95 transition shadow-lg md:shadow-xl">
        <h3 class="absolute bottom-3 left-4 z-10 text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-none">
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