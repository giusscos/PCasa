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
    <NuxtLink to="/" title="Torna alla home" @click="closeMenu" class="w-20 h-10">
        <span class="sr-only">
            Pcasa
        </span>
        <!-- <LogoXmas class="hidden md:block object-cover object-center" />
        <LogoMiniXmas class="block md:hidden object-cover object-center" /> -->
        <Logo class="hidden md:block object-cover object-center" />
        <LogoMini class="block md:hidden object-cover object-center" />
    </NuxtLink>
</template>
<style>
@import '~/assets/css/main.css';
</style>