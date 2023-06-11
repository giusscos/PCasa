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
            document.querySelector('body').classList.add('overflow-y-hidden')
        },
        closeMenu() {
            this.headerState = 'closing'
            document.querySelector('body').classList.remove('overflow-y-hidden')
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