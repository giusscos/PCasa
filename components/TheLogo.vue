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
            const bodyComponent = document.querySelector('body')
            bodyComponent.classList.remove('overflow-y-hidden')

            const headerComponent = document.querySelector('.main_header')
            headerComponent.addEventListener('animationend', () => {
                headerComponent.setAttribute('data-status', "closed")
            }, { once: true })
        },
    }
}
</script>
<template>
    <NuxtLink to="/" title="Torna alla home" @click="this.closeMenu" class="w-20 h-10">
        <h1 class="sr-only">
            Pcasa
        </h1>
        <Logo class="hidden md:block object-cover object-center" />
        <LogoMini class="block md:hidden object-cover object-center" />
    </NuxtLink>
</template>
<style>
@import '~/assets/css/main.css';
</style>