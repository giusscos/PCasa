<script>
export default {
    name: "NavList",
    data() {
        return {
            navLinks: [
                {
                    'name': 'prodotti',
                    'nameRoute': '/prodotti',
                    'title': 'Visita la pagina dei prodotti',
                },
                {
                    'name': 'ecologia',
                    'nameRoute': '/ecologia',
                    'title': 'Scopri come fare ecologia',
                },
                {
                    'name': 'chi siamo',
                    'nameRoute': '/chi-siamo',
                    'title': 'Scopri la nostra azienda',
                },
                {
                    'name': 'contatti',
                    'nameRoute': '/contatti',
                    'title': 'Visita la pagina dei contatti',
                },
            ],
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
    <ul class="flex flex-col md:flex-row md:justify-center md:items-center gap-y-8 md:gap-x-8 pt-8 md:pt-0">
        <li v-for="(link, i) in navLinks" :key="i + 'item-list'" class="item_list">
            <NuxtLink :to="link.nameRoute" :title="link.title" @click="this.closeMenu"
                class="block text-gray-300 hover:text-white text-left text-5xl md:text-2xl font-semibold transition capitalize leading-none">
                {{ link.name }}
            </NuxtLink>
        </li>
    </ul>
</template>
<style>
@import '~/assets/css/main.css';
</style>