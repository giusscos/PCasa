<script>
export default {
    name: 'ToggleMenu',
    data() {
        return {
            headerState: menuState(),
            isExpanded: menuToggleState(),
        }
    },
    methods: {
        openMenu() {
            this.headerState = 'opened'
            const bodyComponent = document.querySelector('body')
            bodyComponent.classList.add('overflow-y-hidden')
        },
        closeMenu() {
            this.headerState = 'closing'
            const bodyComponent = document.querySelector('body')
            bodyComponent.classList.remove('overflow-y-hidden')

            const headerComponent = document.querySelector('.main_header')
            headerComponent.addEventListener('animationend', () => {
                headerComponent.setAttribute('data-status', "closed")
            }, { once: true })
        },
        menuToggle() {
            this.isExpanded ? this.closeMenu() : this.openMenu()
            this.isExpanded = !this.isExpanded
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && this.isExpanded) {
                this.closeMenu()
            }
        });
    }
}
</script>
<template>
    <button class="menu md:hidden font-bold text-2xl text-white ml-auto" aria-controls="main_navigation"
        :aria-expanded="isExpanded" @click="this.menuToggle" title="Apri menù">
        Menù
    </button>
</template>
<style>
@import '../assets/css/main.css';
</style>