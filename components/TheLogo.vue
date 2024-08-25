<script setup>
let headerState = menuState();
let isExpanded = menuToggleState();

const closeMenu = () => {
    if (this.headerState !== 'opened') return

    isExpanded.value = !isExpanded.value

    headerState.value = 'closing'

    document.querySelector('body').classList.remove('overflow-y-hidden')
};
</script>
<template>
    <NuxtLink to="/" title="Torna alla home" @click="closeMenu" class="flex gap-2 justify-center items-center">
        <!-- <span class="sr-only">Pcasa</span> -->

        <!-- <LogoXmas class="hidden md:block object-cover object-center" /> -->
        <!-- <LogoMiniXmas class="block md:hidden object-cover object-center" /> -->
        <!-- <Logo class="hidden md:block object-cover object-center relative -top-1" /> -->
        <!-- <LogoMini class="block h-5 w-auto object-cover object-center" /> -->

        <h1 class="font-bold text-lg">Pcasa</h1>
    </NuxtLink>
</template>
<style>
@import '~/assets/css/main.css';
</style>