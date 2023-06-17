<script>
export default {
    name: 'TheLogo',
    data() {
        return {
            headerState: menuState(),
            isExpanded: menuToggleState(),
        }
    },
    methods: {
        closeMenu() {
            if (this.headerState !== 'opened') return
            this.isExpanded = !this.isExpanded
            this.headerState = 'closing'
            document.querySelector('body').classList.remove('overflow-y-hidden')
        },
    }
}
</script>
<template>
    <NuxtLink to="/" title="Torna alla home" @click="closeMenu" class="w-20 h-10">
        <span class="sr-only">
            Pcasa
        </span>
        <Logo class="hidden md:block object-cover object-center" />
        <LogoMini class="block md:hidden object-cover object-center" />
    </NuxtLink>
</template>
<style>
@import '~/assets/css/main.css';
</style>